import queue
import signal
import time
from pyglet.clock import Clock
import _thread
import setproctitle
from maple import constants as maple_constants

from ..share import constants
from ..share.log import logger
from .request import Request


class Worker:
    request_class = Request
    got_first_request = False

    # pipe 比 queue性能高一点，因为queue是在pipe的基础上加了锁
    # 但是最终还是得选择queue，因为pipe.recv是阻塞的，也就是每次poll完了只能读取一次
    # 这会导致clock的计算次数增加，没必要
    task_queue = None

    app = None
    worker_id = None

    enabled = True
    got_keyboard_interrupt = False

    # 业务可以通过clock来设置schedule
    clock = None

    # 工作进展
    work_progress = None

    def __init__(self, app, worker_id, task_queue):
        self.app = app
        self.worker_id = worker_id
        self.task_queue = task_queue

        self.clock = Clock()

    def run(self):
        setproctitle.setproctitle(self.app.make_proc_name(
            'worker:%s' % self.worker_id
        ))

        self._handle_signals()

        self._on_start()

        # daemon==True，主线程不需要等待网络线程结束
        _thread.start_new_thread(self._monitor_work_timeout, ())

        while self.enabled:
            try:
                self._handle()
            except KeyboardInterrupt:
                break
            except:
                logger.error('exc occur. worker: %s', self, exc_info=True)

        self._on_stop()

    def _handle(self):
        """
        主循环，等待网络消息，并进行处理
        """
        # 允许idle
        sleep_time = self.clock.get_sleep_time(True)
        # sleep_time is None 说明没有需要处理的，直接永久阻塞等待即可
        # 否则就要使用指定时间阻塞等待
        task_list = []

        # 第一个get要block
        block = True
        while True:
            try:
                task_list.append(
                    self.task_queue.get(block=block, timeout=sleep_time)
                )
            except queue.Empty:
                # 说明已经没有了
                break
            except KeyboardInterrupt:
                # 原样抛出
                raise
            except:
                # 说明出问题了
                logger.error('exc occur. worker: %s', self, exc_info=True)
                break
            finally:
                block = False

        for task in task_list:
            if task is None:
                # 通过传入None来中断block
                continue

            request = self.request_class(self, task)
            # 设置task开始处理的时间和信息
            self.work_progress = dict(
                begin_time=time.time(),
                request=request,
            )

            self._handle_request(request)

            self.work_progress = None

        self.clock.tick(True)

    def _handle_request(self, request):
        """
        出现任何异常的时候，服务器不再主动关闭连接
        """
        if not request.view_func:
            logger.info('cmd invalid. request: %s' % request)
            return False

        if not self.got_first_request:
            self.got_first_request = True
            self.app.events.before_first_request(request)
            for bp in self.app.blueprints:
                bp.events.before_app_first_request(request)

        self.app.events.before_request(request)
        for bp in self.app.blueprints:
            bp.events.before_app_request(request)
        if request.blueprint:
            request.blueprint.events.before_request(request)

        if request.interrupted:
            # 业务要求中断
            return True

        view_func_exc = None

        try:
            request.view_func(request)
        except Exception as e:
            logger.error('view_func raise exception. e: %s, request: %s', e, request, exc_info=True)
            view_func_exc = e

        if request.blueprint:
            request.blueprint.events.after_request(request, view_func_exc)
        for bp in self.app.blueprints:
            bp.events.after_app_request(request, view_func_exc)
        self.app.events.after_request(request, view_func_exc)

        return True

    def _monitor_work_timeout(self):
        """
        监控task的耗时
        :return:
        """

        while True:
            time.sleep(1)

            work_progress = self.work_progress
            if work_progress:
                past_time = time.time() - work_progress['begin_time']
                if self.app.work_timeout is not None and past_time > self.app.work_timeout:
                    # 说明worker的处理时间已经太长了
                    logger.fatal('work timeout: %s / %s, request: %s',
                                 past_time, self.app.work_timeout, work_progress['request'])
                    # 不能这么做啊，直接把其他room也杀掉了，就打印一下告警算了
                    # 强制从子线程退出整个进程
                    # os._exit(-1)

    def _on_start(self):
        """
        当worker启动后
        可继承实现
        :return:
        """
        self.app.events.start_worker(self)
        for bp in self.app.blueprints:
            bp.events.start_app_worker(self)

    def _on_stop(self):
        """
        当worker停止前
        可继承实现
        :return:
        """
        for bp in self.app.blueprints:
            bp.events.stop_app_worker(self)
        self.app.events.stop_worker(self)

    def _handle_signals(self):
        def stop_handler(signum, frame):
            self.enabled = False
            if not self.got_keyboard_interrupt:
                self.got_keyboard_interrupt = True
                raise KeyboardInterrupt

        def safe_stop_handler(signum, frame):
            self.enabled = False

        # 强制结束，抛出异常终止程序进行
        signal.signal(signal.SIGINT, stop_handler)
        # 安全停止
        signal.signal(signal.SIGTERM, safe_stop_handler)
        signal.signal(signal.SIGHUP, signal.SIG_IGN)

    def get_fps(self):
        return self.clock.get_fps()

    def schedule(self, func, *args, **kwargs):
        self.clock.schedule(func, *args, **kwargs)

    def schedule_interval(self, func, interval, *args, **kwargs):
        self.clock.schedule_interval(func, interval, *args, **kwargs)

    def schedule_interval_soft(self, func, interval, *args, **kwargs):
        self.clock.schedule_interval_soft(func, interval, *args, **kwargs)

    def schedule_once(self, func, delay, *args, **kwargs):
        self.clock.schedule_once(func, delay, *args, **kwargs)

    def unschedule(self, func):
        self.clock.unschedule(func)

    def unschedule_all(self):
        self.clock = Clock()

    def __repr__(self):
        return '<%s name: %s, worker_id: %r>' % (
            type(self).__name__, self.app.name, self.worker_id
        )

