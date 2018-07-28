rule HackTool_APT28_Cyber_Conflict_dat 
{

    meta:
				judge = "suspicious"
				threatname = "HackTool.APT28_Cyber_Conflict.dat"
				threattype = "None"
				family = "APT28_Cyber_Conflict"
				hacker = "APT28"
				comment = "None"
				date = "2018-07-12"
				author = "dengcong"
				description = "Cyber_Conflict_dat doc for drop trojan" 
				refer = "7622b535b63fdcc29a7a5007c8b0813f"
    strings:
        $hexcode1 = {33 D2 8B C1 F7 76 0C 8B 46 08 8B 3E 8A 04 02 32 44 0F FF 32 04 0F 88 04 19 49 83 F9 FF 7F E1 5F}
    condition:
        1 of them
}