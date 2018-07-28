rule Trojan_backdoor_Win32_APT28_Cyber_Conflict_a
{

    meta:
        judge = "black"
				threatname = "Trojan[backdoor]/Win32.APT28_Cyber_Conflict.a"
				threattype = "backdoor"
				family = "APT28_Cyber_Conflict"
				hacker = "APT28"
				comment = "None"
				date = "2018-07-12"
				author = "dengcong"
				description = "Cyber_Conflict backdoor" 
				refer = "fc7d4cde5d2266082966d80f5f1566b9"
    strings:
        $hexstr1 = {4E 3D 35 34 0E 04 51 56 0B 78 2C 5B 19 26 66 0D 4E 67 57 34 56 51 39 40 28 54}
        $hexstr2 = {08 7A 05 04 60 7C 3E 3C 5D 0B 18 3C 55 64}
        $hexcode = {8D 0C 30 C7 45 FC 0E 00 00 00 33 D2 F7 75 FC 8A 82 EC 71 00 10 32 04 0F 88 01 8B 45 0C 40 89 45 0C 3B C3 7C DB}
        $hexstr3 = {6c 13 76 6f}
        $hexstr4 = {6a 0f 6c 68 04 41}
        $hexstr5 = {61 14 6f 61 03 08}
        $hexstr6 = {61 17 62 39}
        $hexstr7 = {58 35 56 50 4f 3f 51 00}
        $hexstr8 = {2f 5f 76 21 13 59 4d 13 62 2e 6b 01 70 17}
        $hexstr9 = {5B 15 63 70 17 1D 4C 59 01 46 71 5F 27 0B 7B 15 63 70 3C 2B 57 52 39 64 6F 4F 09 27 7D 08 77 61 0E 08 68 59 2F 78 71 53 3B 38 41 14 71 61 12 12 5B 48 7D 58 7D 48 21 0D 66 1D 76 58 33 19 4C 4A 38 79 6B}
    condition:
        all of them
}                               