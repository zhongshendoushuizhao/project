rule HackTool_Gazer_certificate_subject_a
{

    meta:  
        judge = "suspicious"
			  threatname = "HackTool.Gazer_certificate_subject.a"
			  threattype = ""
			  family = ""
			  hacker = "Turla Carbon malware"
			  comment = "https://www.welivesecurity.com/2017/03/30/carbon-paper-peering-turlas-second-stage-backdoor/ https://github.com/eset/malware-ioc/"
			  date = "2018-04-29"
        author = "ESET Research--dc"
        description = "Turla Gazer malware BSD 2-Clause"
        refer = ""
        
    condition:
         for any i in (0..pe.number_of_signatures - 1):
         			(pe.signatures[i].subject contains "Solid Loop" or pe.signatures[i].subject contains "Ultimate Computer Support")
}
