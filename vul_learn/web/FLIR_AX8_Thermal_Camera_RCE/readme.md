# FLIR_AX8_Thermal_Camera_RCE

Exploit Title: FLIR AX8 Thermal Camera 1.32.16 - Remote Code Execution
Author: Gjoko 'LiquidWorm' Krstic @zeroscience
Date: 2018-10-14
Vendor: FLIR Systems, Inc.
Product web page: https://www.flir.com
Affected version: Firmware: 1.32.16, 1.17.13, OS: neco_v1.8-0-g7ffe5b3, Hardware: Flir Systems Neco Board
Tested on: GNU/Linux 3.0.35-flir+gfd883a0 (armv7l), lighttpd/1.4.33, PHP/5.4.14
References:
Advisory ID: ZSL-2018-5491
Advisory URL: https://www.zeroscience.mk/en/vulnerabilities/ZSL-2018-5491.php
[披露地址](https://www.exploit-db.com/exploits/45602)
跟进分析到这个热传感摄像头 的 命令注入漏洞

做简单分析

```
# /FLIR/usr/www/res.php:
# ----------------------
# 1. <?php
# 2.   if (isset($_POST["action"])) {
# 3.     switch ($_POST["action"]) {
# 4.       case "get":
# 5.         if(isset($_POST["resource"]))
# 6.         {
# 7.           switch ($_POST["resource"]) {
# 8.             case ".rtp.hflip":
# 9.               if (!file_exists("/FLIR/system/journal.d/horizontal_flip.cfg")) {
# 10.                $result = "false";
# 11.                break;
# 12.              }
# 13.              $result = file_get_contents("/FLIR/system/journal.d/horizontal_flip.cfg") === "1" ? "true" : "false";
# 14.              break;
# 15.            case ".rtp.vflip":
# 16.              if (!file_exists("/FLIR/system/journal.d/vertical_flip.cfg")) {
# 17.                $result = "false";
# 18.                break;
# 19.              }
# 20.              $result = file_get_contents("/FLIR/system/journal.d/vertical_flip.cfg") === "1" ? "true" : "false";
# 21.              break;
# 22.            default:
# 23.              $result = trim(shell_exec("LD_LIBRARY_PATH=/FLIR/usr/lib /FLIR/usr/bin/rls -o ".$_POST["resource"])); ---------------注入利用点
# 24.          }
# 25.        }

# /FLIR/usr/www/palette.php:
# --------------------------
# 1. <?php
# 2.   if(isset($_POST["palette"])){
# 3.     shell_exec("LD_LIBRARY_PATH=/FLIR/usr/lib /FLIR/usr/bin/palette ".$_POST["palette"]);---------注入利用点
# 4.     echo json_encode(array("success"));
# 5.   }
# 6. ?>
```

典型的命令注入 （shell_exec） 这个地方 并没有做 过滤处理 直接通过；这样的隔断符就能执行其他命令

exp POC脚本 做了 addroot 这样的 测试操作

pocsuite 脚本