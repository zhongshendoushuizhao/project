

| Initial   Access 初始访问 | Execution执行 | Persistence   驻留系统    | Privilege   Escalation提权 | Defense   Rvasion逃避防御检测 | Credential   Access 凭证访问 | Discovery 发现 | Lateral Movement   传播 | Collection 收集 | Exfiltration 泄露 | Command and   Control命令控制 |
| ------------------------- | ------------- | ------------------------- | -------------------------- | ----------------------------- | ---------------------------- | -------------- | ----------------------- | --------------- | ----------------- | ----------------------------- |
| 鱼叉钓鱼附件攻击          | 脚本执行      | 注册表运行/启动文件夹运行 |                            | 混淆解码                      |                              |                |                         |                 |                   | 自定义命令和控制协议          |
|                           |               |                           |                            |                               |                              |                |                         |                 |                   |                               |
|                           |               |                           |                            |                               |                              |                |                         |                 |                   |                               |
|                           |               |                           |                            |                               |                              |                |                         |                 |                   |                               |

报告文档：Cyber_Conflict_APT28.pdf

url地址：https://blog.talosintelligence.com/2017/10/cyber-conflict-decoy-document.html



鱼叉钓鱼附件攻击

- 样本hash:94B288154E3D0225F86BB3C012FA8D63
- 行为：解密程序，释放文件
- 行为集合： C:\Windows\System32\rundll32.exe "C:\Users\cong\AppData\Local\netwf.dat",KlpSvc
- 检测规则：Trojan_Downloader_Win32_APT28_Cyber_Conflict_vba_a.yar
- 模糊搜索规则：HackTool_APT28_Cyber_Conflict_vba_a.yar
- 攻击文档生成demo:    createattack_VBA_demo

脚本执行

- 样本hash：60bc999ff14ee2f359130d6c1375b033 ，05047623d3ea998d6d5bd3b5857d52f2
- 行为：释放文件，执行文件
- 行为集合：reg:     HKCU\Environment\UserInitMprLogonScript     CLSID:      {BCDE0395-E52F-467C-8E3D-C4579291692E} 
- 检测规则：Trojan_Downloader_Win32_APT28_Cyber_Conflict_bat.yar  Trojan_Downloader_Win32_APT28_Cyber_Conflict_dat.yar

通过注册表运行/启动文件夹运行

-  行为集合：   reg:     HKCU\Environment\UserInitMprLogonScript     CLSID:      {BCDE0395-E52F-467C-8E3D-C4579291692E} 

混淆代码：

-  混淆方法： 解密key:\ X08 \ X7A \ X05 \ X04 \ X60 \ X7C \ x3e \ X3C \ X5D \ X0B \ X18 \ X3C \ X55 \ 64  通过xor 进行逆向解码

后门：

- MD5：fc7d4cde5d2266082966d80f5f1566b9 
- 行为：测试网络连通性，创建互斥量，请求配置myinvestgroup.com 尝试通信
- 行为集合：  network:  /ZlG/oZwoF.MP2P/?A7M=vtRJ/Zsx17rRdtmfn0g=\r\n
- 检测规则：Trojan_backdoor_Win32_APT28_Cyber_Conflict_a

  