# peony

### 一. 概述

peony是专门配合maple来使用的，其具体架构为:

    gateway/ws_gateway -> broker -> peony
          ^                           |
          |                           |
          +-------- forwarder --------+


考虑到使用场景，worker内部仅解析到Task这一层，业务层需要自己转换成ClassView来处理具体的box比较好。

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

而且peony.worker的使用场景通常会将数据load到内存中，定时写入，所以worker直接支持热重启也不是很好的方案。


3. 与burst在worker上直接实现定时器的优劣对比

优点:
    1. 真实的pending_tasks统计
    2. 无需ask_for_task进行通信确认，速度更快
    
缺点:
    1. 无法进行热重启。更新代码后必须强制restart
    
    
当然，对于缺点1要看怎么想，如果本身就是把数据load到内存的实现，那么热重启本来就用不了。


