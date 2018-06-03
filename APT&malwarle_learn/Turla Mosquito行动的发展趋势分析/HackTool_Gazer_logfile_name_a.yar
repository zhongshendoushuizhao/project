rule HackTool_Gazer_logfile_name_a
{

    meta:  
        judge = "suspicious"
			  threatname = "HackTool.Gazer_logfile_name.a"
			  threattype = ""
			  family = ""
			  hacker = "Turla Carbon malware"
			  comment = "https://www.welivesecurity.com/2017/03/30/carbon-paper-peering-turlas-second-stage-backdoor/ https://github.com/eset/malware-ioc/"
			  date = "2018-04-29"
        author = "ESET Research--dc"
        description = "Turla Gazer malware BSD 2-Clause"
        refer = ""
        
    strings:
    		$s1 = "CVRG72B5.tmp.cvr"
    		$s2 = "CVRG1A6B.tmp.cvr"
    		$s3 = "CVRG38D9.tmp.cvr"

  	condition:
    		(uint16(0) == 0x5a4d) and 1 of them
}