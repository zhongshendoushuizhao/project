rule HackTool_Gazer_certificate_a
{

    meta:  
        judge = "suspicious"
			  threatname = "HackTool.Gazer_certificate.a"
			  threattype = ""
			  family = ""
			  hacker = "Turla Carbon malware"
			  comment = "https://www.welivesecurity.com/2017/03/30/carbon-paper-peering-turlas-second-stage-backdoor/ https://github.com/eset/malware-ioc/"
			  date = "2018-04-29"
        author = "ESET Research--dc"
        description = "Turla Gazer malware BSD 2-Clause"
        refer = ""
        
    strings:
    $certif1 = {52 76 a4 53 cd 70 9c 18 da 65 15 7e 5f 1f de 02}
    $certif2 = {12 90 f2 41 d9 b2 80 af 77 fc da 12 c6 b4 96 9c}

  condition:
    (uint16(0) == 0x5a4d) and 1 of them and filesize < 2MB
}