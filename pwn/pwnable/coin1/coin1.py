# coding: utf-8
from socket import*
import random
import time
HOST='0.0.0.0'
PORT=9007
#建立socket对象
client=socket(AF_INET,SOCK_STREAM)
#AF_INET表示将使用标准的ipv4地址或主机名
#SOCK_STREAM说明这是一个TCP客户端
    
client.connect((HOST,PORT))#连接
data = client.recv(1024)
time.sleep(4)
for i in range(100):
    data = client.recv(1024)#接收数据
    int_cnt=data.find('N=')+2 #int_cnt用于找到N,C
    N=0
    C=0
    while True:     
        N+=int(data[int_cnt])
        int_cnt+=1
        if data[int_cnt]==' ':
            break
        N*=10
    int_cnt=data.find('C=')+2
    while True:     
        C+=int(data[int_cnt])
        int_cnt+=1
        if data[int_cnt]<'0' :
            break
        if data[int_cnt]>'9' :
            break
        C*=10
    print 'get N=%d'%N,'get C=%d'%C#打印N,C
    left=0
    right=N-1
    mid=(left+right)/2#二分
    for i in xrange(C):#C次询问 
        str_ask=[str(n) for n in xrange(left,mid+1)]
        str_ask=" ".join(str_ask)#构造要询问的硬币
        client.send(str_ask+"\n")#发送数据
        str_weight=client.recv(1024)#接收数据
        str_weight.split("\n")
        int_weight=int(str_weight)
        print "int_weight = ",int_weight,"l=%d mid=%d r=%d"%(left,mid,right)
        if int_weight!=((mid-left+1)*10):
            right=mid
            mid=(right+left)/2
        else:
            left=mid+1
            mid=(left+right)/2
    client.send(str(mid)+"\n")
    ans=client.recv(1024)
    print "ans=",ans
ans=client.recv(1024)#flag
print "ans=%s"%ans    
client.close()
