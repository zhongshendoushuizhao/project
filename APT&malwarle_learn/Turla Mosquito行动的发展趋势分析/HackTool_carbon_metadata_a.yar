rule HackTool_carbon_metadata_a
{
  meta:  
    judge = "suspicious"
	  threatname = "HackTool.carbon_metadata.a"
	  threattype = ""
	  family = ""
	  hacker = "Turla Carbon malware"
	  comment = "https://www.welivesecurity.com/2017/03/30/carbon-paper-peering-turlas-second-stage-backdoor/ https://github.com/eset/malware-ioc/"
	  date = "2018-04-29"
    author = "ESET Research--dc"
    description = "Turla Carbon malware BSD 2-Clause"
    refer = ""

   condition:
      (pe.version_info["InternalName"] contains "SERVICE.EXE" or
       pe.version_info["InternalName"] contains "MSIMGHLP.DLL" or
       pe.version_info["InternalName"] contains "MSXIML.DLL")
       and pe.version_info["CompanyName"] contains "Microsoft Corporation"
}