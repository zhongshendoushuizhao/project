# [案例1基础的mobus数据篡改](https://wenku.baidu.com/view/094f35e7a26925c52dc5bf8e.html?qq-pf-to=pcqq.discussion&pn=50&qq-pf-to=pcqq.c2c)

学习并测试了下 相关内容

#### [mobus协议基本知识](https://en.wikipedia.org/wiki/Modbus)

mobus 对象类型 （形象点就是接口类型）

| 对象类型         | 访问权限   | 大小    |
| ---------------- | ---------- | ------- |
| Coil             | Read-write | 1 bit   |
| Discrete input   | Read-only  | 1 bit   |
| Input register   | Read-only  | 16 bits |
| Holding register | Read-write | 16 bits |

> - 协议版本有很多基本都是各种魔改
> - 串行和MB +网络中，只有指定为主节点的节点才能发起命令
> - 在以太网上，任何设备都可以发送Modbus命令，正常是只有一个节点做这个
> - Modbus命令包含设备的Modbus地址（1到247）。只有预期的设备才会对该命令起作用，指定地址才行，对0地址广播就不行，且mobus命令包含校验信息
> - Modbus可以自定RTU进行寄存器值控制更改和读取I/o接口

mobus 数据帧 有RTU 等格式，暂时只看TCP 帧格式

**Modbus TCP帧格式（主要用于[以太网](https://en.wikipedia.org/wiki/Ethernet)）**

| 名称                                 | 长度（字节） | 功能                               |
| ------------------------------------ | ------------ | ---------------------------------- |
| 交易标识符（Transaction identifier） | 2            | 用于服务器和客户端的消息之间的同步 |
| 协议标识符（Protocol identifier）    | 2            | 0表示Modbus / TCP                  |
| 长度字段（Length field）             | 2            | 此帧中的剩余字节数                 |
| 单位标识符（Unit identifier）        | 1            | 从站地址（如果不使用则为255）      |
| 功能代码 （Function code）           | 1            | 功能代码与其他变体一样             |
| 数据字节（Data bytes）               | *ñ*          | 数据作为响应或命令                 |

数据帧中为大端序（网络字节序为大端序）

功能码:

![20181204122243.jpg](https://github.com/zhongshendoushuizhao/project/blob/master/ICS/demo1/20181204122243.jpg?raw=true)

![20181204122324.jpg](https://github.com/zhongshendoushuizhao/project/blob/master/ICS/demo1/20181204122324.jpg?raw=true)

同时wiki 上也有多种协议交互过程





### 案例一

基于Slave节点仿真模拟程序  对其采用 mbtget工具进行 内存指令篡改



##### Slave仿真程序

ModbusPal是一个开发基于PC的Modbus模拟器的项目。它的目标是重现一个真实的环境，有许多奴隶和动画寄存器值。ModbusPal中的几乎所有内容都可以通过脚本进行自定义和控制。

> ###### 特征
>
> - 通过“学习”自动创建模拟环境
> - 可以使用Python脚本实现复杂的行为
> - 本机支持TCP / IP，RXTX支持SERIAL
> - 可嵌入作为第三方库

[地址]()

该程序的基本功能可以模拟mobus slave 进行数据通信运行

通过添加slave 从站 模拟 工控设备

![20181204164545.jpg](https://github.com/zhongshendoushuizhao/project/blob/master/ICS/demo1/20181204164545.jpg?raw=true)

##### [mbtget](https://github.com/sourceperl/mbtget)

> mbtget - 用于从命令行进行一些modbus事务的简单perl脚本。
>
> Modbus是一种标准的串行通信协议，用于互连工业PLC（以及许多其他东西）。此模块允许您通过MBclient对象访问此协议的TCP和RTU版本。

安装方法:

```shell
git clone https://github.com/sourceperl/mbtget.git
cd mbtget
perl Makefile.PL
make
sudo make install
```

参数：

```
-h  help

-a 地址选择出 access 访问

-n 读取数量

-r read 

-w 写入

-d 转储模式下的

最后需注明 地址

在modbus服务器127.0.0.1上读取地址1000处的字数据
pi@raspberrypi ~ $ mbtget -a 1000 127.0.0.1

values:
1 (ad 01000): 52544.

在modbus服务器plc-1.domaine.net上读取地址1000处的10个字数据
pi@raspberrypi ~ $ mbtget -n 10 -a 1000 plc-1.domaine.net

values:
1 (ad 01000): 52544
2 (ad 01001): 33619
3 (ad 01002): 61010
4 (ad 01003): 11878
5 (ad 01004): 60142
6 (ad 01005): 21714
7 (ad 01006): 14182
8 (ad 01007): 64342
9 (ad 01008): 18511
10 (ad 01009): 59909

在转储模式处于活动状态时，在modbus服务器127.0.0.1上的地址1000处写入333的字值
pi@raspberrypi ~ $ mbtget -w6 333 -a 1000 -d 127.0.0.1
Tx
[10 01 00 00 00 06 01] 06 03 E8 01 4D
Rx
[10 01 00 00 00 06 01] 06 03 E8 01 4D

word write ok
```



##### 基础案例篡改数据

场景 在 slave 设备 如下控制状态

![20181204165103.jpg](https://github.com/zhongshendoushuizhao/project/blob/master/ICS/demo1/20181204165103.jpg?raw=true)

Coils  value 为1值  系统启动正常

![20181204170636.jpg](https://github.com/zhongshendoushuizhao/project/blob/master/ICS/demo1/20181204170636.jpg?raw=true)

其Holding registers 对象 value 9位存储值为 741     当前记录设备运行正常运行次数值

![20181204170655.jpg](https://github.com/zhongshendoushuizhao/project/blob/master/ICS/demo1/20181204170655.jpg?raw=true)

通过脚本 访问其端口可以轻易获取其 Coils 对象 状态值

![20181204172418.jpg](https://github.com/zhongshendoushuizhao/project/blob/master/ICS/demo1/20181204172418.jpg?raw=true)

通过脚本 访问其端口可以轻易获取其Holding registers 对象 9位值

![20181204172435.jpg](https://github.com/zhongshendoushuizhao/project/blob/master/ICS/demo1/20181204172435.jpg?raw=true)

通过脚本 访问502端口对其数据进行篡改 

![20181204171606.jpg](https://github.com/zhongshendoushuizhao/project/blob/master/ICS/demo1/20181204171606.jpg?raw=true)

![20181204171717.jpg](https://github.com/zhongshendoushuizhao/project/blob/master/ICS/demo1/20181204171717.jpg?raw=true)

篡改 Coils 对象 1位值为 0

![20181204171743.jpg](https://github.com/zhongshendoushuizhao/project/blob/master/ICS/demo1/20181204171743.jpg?raw=true)

篡改  Holding registers  对象  3位值为   855

![20181204171806.jpg](https://github.com/zhongshendoushuizhao/project/blob/master/ICS/demo1/20181204171806.jpg?raw=true)

常规系统在该操作下会造成故障