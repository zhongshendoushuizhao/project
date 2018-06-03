rule HackTool_generic_carbon_a
{

    meta:  
        judge = "suspicious"
			  threatname = "HackTool.generic_carbon.a"
			  threattype = ""
			  family = ""
			  hacker = "Turla Carbon malware"
			  comment = "https://www.welivesecurity.com/2017/03/30/carbon-paper-peering-turlas-second-stage-backdoor/ https://github.com/eset/malware-ioc/"
			  date = "2018-04-29"
        author = "ESET Research--dc"
        description = "Turla Carbon malware BSD 2-Clause"
        refer = ""
        
    strings:
         $s1 = "ModStart"
    		 $t1 = "STOP|OK"
         $t2 = "STOP|KILL"

    condition:
        (uint16(0) == 0x5a4d) and (1 of ($s*)) and (1 of ($t*))
}