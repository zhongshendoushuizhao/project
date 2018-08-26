# 记录一些感兴趣的脚本



ssh-tools.ps1

目前的功能：

- 反向端口转发

- 在脚本中包含ssh.net dll，在执行时不会写入磁盘，只需要此ps1文件。可以与Empire一起使用而不会破坏opsec

  用法：

> import-module SSH-Tools.ps1 Start-ReversePortForward -sshhost ssh.myhost.com -username USER1 -password PASS -RemotePort 23000 -Desthost someinternalserver.local -destport 80

或者在端口23000上启动tunnel + socks5代理

> start-socksproxy -sshhost ssh.myhost.com -username USER -password PASS -RemotePort 23000 -LocalPort 10000

当你完成

> 停止 - PortForwardJobs

