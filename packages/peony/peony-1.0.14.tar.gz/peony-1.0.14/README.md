# peony

### 一. 概述

peony的定位是更轻量，更快速的burst。  
burst更加重量级一些，其满足了很多大而全的功能，不是专为maple架构设计的。

而peony是专门配合maple来使用的，其具体架构为:

    gateway/ws_gateway -> broker -> peony
          ^                           |
          |                           |
          +-------- forwarder --------+


peony的特点:

1. 启动速度更快

    worker使用multiprocessing.Process启动，速度更快，但是无法支持worker的热重启
    
2. 获取task的速度更快

    不对连接到peony的client做直接响应，全部通过trigger对gateway发送消息
    
3. 代码更简洁

    proxy合并到了master进程中，worker与master的通信使用multiprocessing.Queue

### 二. 适用场景

* 单人联网的逻辑复杂游戏
* 玩家间的交互非常少

比如修仙模拟器，其计算逻辑非常复杂，计算依赖的数据量也很大，比如进入副本之后的战斗。
如果每次客户端请求都先加载一遍数据，计算完再返回给客户端，对性能的消耗太大了。

如果试用peony的话，就可以让某个玩家固定路由到某台peony.worker上，其数据在第一次请求的时候加载进入worker内存中，之后的请求就不用再加载了。
然后定时将内存的数据写入到磁盘(leveldb)或者其它存储(redis)中。

peony中还自带了定时器功能，所以可以很方便的实现定时处理的事件。如定时获得资源，或者定时写入磁盘等。


### 三. 最佳实践

1. 合服后的数据迁移问题

    数据不合并，仅peony server共用即可。

    即原本一个region对应一个peony server，合服后两个region共用一个peony server。

    但是region的user数据还是存储在原来的地方，所以该去哪里读还是在哪里。

    这样既不会浪费服务器资源，也没有增加维护成本。

2. 热重启服务器问题

    不同于burst的实现，peony的worker是通过multiprocessing.Process来启动的。

    所以无法做到通过kill -HUP来实现热重启。

    原因有几个:

    * peony.worker的使用场景通常会将数据read到内存中，定时写入，所以worker直接支持热重启也不是很好的方案。
    * burst.worker的启动方式机器缓慢，所以当时burst为了支持reload，使用了极其复杂的逻辑。
    * proxy丢失数据其实没那么重要。burst之所以要支持reload，其实是希望proxy层不丢失已经接收的任务，同时也是因为起worker启动机器缓慢，所以restart的代价极高。  
    但是仔细想想，在我们的业务里，如果restart的足够快的话，这些消息真的不能丢失吗？我觉得是可以的。

    如果想要支持热重启，可能最好的解决方案就是 worker 第一次请求uid时read一次，之后都不需要再read，只是写入即可。  
    当然还是要加一下timeout，或者监听玩家掉线的事件，及时把read进来的数据释放掉。

3. 与burst在worker上直接实现定时器的优劣对比

    优点:
        1. 真实的pending_tasks统计
        2. 无需ask_for_task进行通信确认，速度更快，性能更高
        
    缺点:
        1. 无法进行热重启。更新代码后必须强制restart
        
        
    当然，对于缺点1要看怎么想，前面的热重启服务器问题已经说的很清楚了。

4. 关于worker与master的通信方案选择

    目前选择的是multiprocessing.Queue。

    原因如下：

    1. 方便在master上统计pending_tasks和discard_tasks
    2. 如果使用pipe的话，其recv函数是阻塞的，所以每次pool之后只能处理一个task，导致clock的计算次数大量增加。
    3. 如果使用文件socket+select的话，会有connect阻塞的问题，这里的代码实现会非常复杂。  
    另外如果想要在master上统计pending_tasks和discard_tasks，就需要类似burst的响应方案，但是性能下降，或者就是不统计。

    当然，使用Queue也有缺点，就是比pipe性能低一点，毕竟为了支持多对多而加了锁。


#### 四. 待处理

1. <del>性能测试</del>

2. 测试业务复杂之后，restart的速度
