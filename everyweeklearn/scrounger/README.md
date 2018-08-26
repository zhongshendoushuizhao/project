# **scrounger**

这个scrounger 工具模仿msf 进行了 安卓  iOS平台 的 相关 漏洞 模块 集成 和测试  

[简单说明](https://labs.nettitude.com/blog/introducing-scrounger-ios-and-android-mobile-application-penetration-testing-framework/)

[git地址](https://github.com/nettitude/scrounger)

```
usage: scrounger [-h] [-m analysis/ios/module1;analysis/ios/module2]
                 [-a argument1=value1;argument1=value2;]
                 [-f /path/to/the/app.[apk|ipa]] [-d device_id] [-l] [-o]
                 [-p /path/to/full-analysis.json] [-V] [-D]

   _____
  / ____|
 | (___   ___ _ __ ___  _   _ _ __   __ _  ___ _ __
  \___ \ / __| '__/ _ \| | | | '_ \ / _` |/ _ \ '__|
  ____) | (__| | | (_) | |_| | | | | (_| |  __/ |
 |_____/ \___|_|  \___/ \__,_|_| |_|\__, |\___|_|
                                     __/ |
                                    |___/

optional arguments:
  -h, --help            show this help message and exit
  -m analysis/ios/module1;analysis/ios/module2, --modules analysis/ios/module1;analysis/ios/module2
                        modules to be run - seperated by ; - will be run in order
  -a argument1=value1;argument1=value2;, --arguments argument1=value1;argument1=value2;
                        arguments for the modules to be run
  -f /path/to/the/app.[apk|ipa], --full-analysis /path/to/the/app.[apk|ipa]
                        runs a full analysis on the application
  -d device_id, --device device_id
                        device to be used by the modules
  -l, --list            list available devices and modules
  -o, --options         prints the required options for the selected modules
  -p /path/to/full-analysis.json, --print-results /path/to/full-analysis.json
                        prints the results of a full analysis json file
  -V, --verbose         prints more information when running the modules
  -D, --debug           prints more information when running scrounger
```



常用的测试模块因为是集成了 其他的工具 模块并非很全

```
$ scrounger-console
Starting Scrounger console...

> help

Documented commands (type help <topic>):
========================================
add_device  devices  list     print  results  set   unset
back        help     options  quit   run      show  use


> help list
Lists all available modules

> list ios

Module                                  Certainty Author Description
------                                  --------- ------ -----------
analysis/ios/app_transport_security     90%       RDC    Checks if there are any Application Transport Security misconfigurations
analysis/ios/arc_support                90%       RDC    Checks if a binary was compiled with ARC support
analysis/ios/backups                    90%       RDC    Checks the application's files have the backup flag on
analysis/ios/clipboard_access           75%       RDC    Checks if the application disables clipboard access
analysis/ios/debugger_detection         75%       RDC    Checks if the application detects debuggers
analysis/ios/excessive_permissions      90%       RDC    Checks if the application uses excessive permissions
analysis/ios/file_protection            90%       RDC    Checks the application's files specific protection flags
analysis/ios/full_analysis              100%      RDC    Runs all modules in analysis and writes a report into the output directory
analysis/ios/insecure_channels          50%       RDC    Checks if the application uses insecure channels
analysis/ios/insecure_function_calls    75%       RDC    Checks if the application uses insecure function calls
analysis/ios/jailbreak_detection        60%       RDC    Checks if the application implements jailbreak detection
analysis/ios/logs                       60%       RDC    Checks if the application logs to syslog
analysis/ios/passcode_detection         60%       RDC    Checks if the application checks for passcode being set
analysis/ios/pie_support                100%      RDC    Checks if the application was compiled with PIE support
analysis/ios/prepared_statements        60%       RDC    Checks if the application uses sqlite calls and if so checks if it also uses prepared statements
analysis/ios/ssl_pinning                60%       RDC    Checks if the application implements SSL pinning
analysis/ios/stack_smashing             90%       RDC    Checks if a binary was compiled stack smashing protections
analysis/ios/third_party_keyboard       65%       RDC    Checks if an application checks of third party keyboards
analysis/ios/unencrypted_communications 80%       RDC    Checks if the application implements communicates over unencrypted channels
analysis/ios/unencrypted_keychain_data  70%       RDC    Checks if the application saves unencrypted data in the keychain
analysis/ios/weak_crypto                60%       RDC    Checks if the application uses weak crypto
analysis/ios/weak_random                50%       RDC    Checks if a binary uses weak random functions
analysis/ios/weak_ssl_ciphers           50%       RDC    Checks if a binary uses weak SSL ciphers
misc/ios/app/archs                      100%      RDC    Gets the application's available architectures
misc/ios/app/data                       100%      RDC    Gets the application's data from the remote device
misc/ios/app/entitlements               100%      RDC    Gets the application's entitlements
misc/ios/app/flags                      100%      RDC    Gets the application's compilation flags
misc/ios/app/info                       100%      RDC    Pulls the Info.plist info from the device
misc/ios/app/start                      100%      RDC    Launches an application on the remote device
misc/ios/app/symbols                    100%      RDC    Gets the application's symbols out of an installed application on the device
misc/ios/class_dump                     100%      RDC    Dumps the classes out of a decrypted binary
misc/ios/decrypt_bin                    100%      RDC    Decrypts and pulls a binary application
misc/ios/install_binaries               100%      RDC    Installs iOS binaries required to run some checks
misc/ios/keychain_dump                  100%      RDC    Dumps contents from the connected device's keychain
misc/ios/local/app/archs                100%      RDC    Gets the application's available architectures
misc/ios/local/app/entitlements         100%      RDC    Gets the application's entitlements from a local binary and saves them to file
misc/ios/local/app/flags                100%      RDC    Gets the application's compilation flags using local tools. Will look for otool and jtool in the PATH.
misc/ios/local/app/info                 100%      RDC    Pulls the Info.plist info from the unzipped IPA file and saves an XML file with it's contents to the output folder
misc/ios/local/app/symbols              100%      RDC    Gets the application's symbols out of an installed application on the device
misc/ios/local/class_dump               100%      RDC    Dumps the classes out of a decrypted binary
misc/ios/pull_ipa                       100%      RDC    Pulls the IPA file from a remote device
misc/ios/unzip_ipa                      100%      RDC    Unzips the IPA file into the output directory
```