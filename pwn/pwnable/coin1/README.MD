COIN1

题目英文：讲的是

题目的意思是在一堆硬币中有一枚假硬币，假硬币的重量是9，而正常的是10。现在有N枚硬币，你可以询问C次。每次询问返回的是你询问的硬币的质量之和。询问C次之后，就要告诉它假的硬币的编号。然后要搞100次。。。。。。

例如：

[server] :N=4 C=2

[client]   :0 1

[server] :20

[client]   :3

[server] :10

[client]   :2

[server] :Correct!

4个硬币 2 次询问机会

第一次询问 0  1 两个总重20，说明 各为 10

第二次问 3 重量 为10  

那么就只剩下 2

故 2为 假币



实例场景中

N=696   C=10

通过二分法  不停的 折半 那些异常的  1-mid 质量不为  count*10的 基本能够定位到异常货币

```
 if int_weight!=((mid-left+1)*10):
            right=mid
            mid=(right+left)/2
 else:
     left=mid+1
     mid=(left+right)/2
```

脚本借鉴别人的可以看