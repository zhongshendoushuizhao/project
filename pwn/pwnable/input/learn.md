```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/socket.h>
#include <arpa/inet.h>

int main(int argc, char* argv[], char* envp[]){
	printf("Welcome to pwnable.kr\n");
	printf("Let's see if you know how to give input to program\n");
	printf("Just give me correct inputs then you will get the flag :)\n");

	// argv
	if(argc != 100) return 0;  //参数个数等于100个  其实为 99个值传参 ，程序名算做一个参数
	if(strcmp(argv['A'],"\x00")) return 0;  // argv['A']解析为ascii码 65 "\x00"为空字符 
    									 //故意思为 第65个参数 必须为空
	if(strcmp(argv['B'],"\x20\x0a\x0d")) return 0;  // argv['A']解析为ascii码 66
    											// 值必须为 "\x20\x0a\x0d" （非可读字符）
	printf("Stage 1 clear!\n");	

    //第一部分需要构造参数如上：
    //构造方法有两种
    //一种，采用perl语言， 通过修改linux结尾标志位（内部的域分隔符）$IFS(正常为\x00)，从而使\x00能够拼
    //接 , IFS 修改方法为linuxshell: IFS="-" echo "$IFS"   
    //C
    //char *argv[101] = {"/home/input/input", [1 ... 99] = "A", NULL};
	//argv['A'] = "\x00";
	//argv['B'] = "\x20\x0a\x0d";
    //execve("/home/input/input",argv,NULL);
    
    //python
    //# DEBUG = False
	//DEBUG = True

	//# stage 1: argv
	//if not DEBUG:
    //	args = ['/home/input2/input'] + ['A']*99
	//else:
    //	args = ['./input'] + ['A']*99
	//args[ord('A')] = ""
	//args[ord('B')] = "\x20\x0a\x0d"
	//args[ord('C')] = "12345"

    
	// stdio
	char buf[4];
	read(0, buf, 4); //管道 0
	puts(buf);
	if(memcmp(buf, "\x00\x0a\x00\xff", 4)) return 0;
	read(2, buf, 4);  //管道 2
        if(memcmp(buf, "\x00\x0a\x02\xff", 4)) return 0;
	printf("Stage 2 clear!\n");
	
    //管道知识：http://unixwiz.net/techtips/remap-pipe-fds.html
    //https://blog.csdn.net/Crazy_Tengt/article/details/72717144
    //stdin 0
    //stdout 1
    //stderr 2
    //故是需要向这几个描述符 通过管道写入对应值
    
    //python
    //stderr, stderw = os.pipe()
    //proc = subprocess.Popen(args, stdin=subprocess.PIPE, stderr=stderr, env=env)
	//proc.stdin.write("\x00\x0a\x00\xff")
    //os.write(stderw, "\x00\x0a\x02\xff")  #stderw是不是写错了err 2333
	
    // env
	if(strcmp("\xca\xfe\xba\xbe", getenv("\xde\xad\xbe\xef"))) return 0;
	printf("Stage 3 clear!\n");

    //环境变量更改，添加一个 名为\xde\xad\xbe\xef  value 为 \xca\xfe\xba\xbe的环境变量
    //env = os.environ.copy()
	//env["\xde\xad\xbe\xef"] = "\xca\xfe\xba\xbe"
	//# print env['PATH']
    
    
    
    
	// file
	FILE* fp = fopen("\x0a", "r");
	if(!fp) return 0;
	if( fread(buf, 4, 1, fp)!=1 ) return 0;
	if( memcmp(buf, "\x00\x00\x00\x00", 4) ) return 0;
	fclose(fp);
	printf("Stage 4 clear!\n");	

    
    //名为 "\x0a" 
    //读取 “\x00\x00\x00\x00” 对比
    
    
    
	// network
	int sd, cd;
	struct sockaddr_in saddr, caddr;
	sd = socket(AF_INET, SOCK_STREAM, 0);
	if(sd == -1){
		printf("socket error, tell admin\n");
		return 0;
	}
	saddr.sin_family = AF_INET;
	saddr.sin_addr.s_addr = INADDR_ANY;
	saddr.sin_port = htons( atoi(argv['C']) );
	if(bind(sd, (struct sockaddr*)&saddr, sizeof(saddr)) < 0){
		printf("bind error, use another port\n");
    		return 1;
	}
	listen(sd, 1);
	int c = sizeof(struct sockaddr_in);
	cd = accept(sd, (struct sockaddr *)&caddr, (socklen_t*)&c);
	if(cd < 0){
		printf("accept error, tell admin\n");
		return 0;
	}
	if( recv(cd, buf, 4, 0) != 4 ) return 0;
	if(memcmp(buf, "\xde\xad\xbe\xef", 4)) return 0;
	printf("Stage 5 clear!\n");
    
    //socket 读写
    //跟他连接 发他个 \xde\xad\xbe\xe
    //time.sleep(3) # wait input create socket
	//s.connect(("127.0.0.1", 12345))
	//s.send("\xde\xad\xbe\xef")
	//s.close()
    
    
    
	// here's your flag
	system("/bin/cat flag");	
	return 0;
    
    
    //目录不同 ，可通过 in /home/input/flag flag 进行软连接创建
}
```