rule Trojan_Downloader_Win32_APT28_Cyber_Conflict_bat
{

    meta:
        judge = "black"
				threatname = "Trojan[Downloader]/Win32.APT28_Cyber_Conflict.bat"
				threattype = "Downloader"
				family = "APT28_Cyber_Conflict"
				hacker = "APT28"
				comment = "None"
				date = "2018-07-12"
				author = "dengcong"
				description = "Cyber_Conflict_ bat doc for drop trojan" 
				refer = "05047623d3ea998d6d5bd3b5857d52f2"
    strings:
        $str1 = "set path = "%localappdata%\netwf.dll"
        $str2 = "start rundll32.exe %path %"
    condition:
        all of them
}