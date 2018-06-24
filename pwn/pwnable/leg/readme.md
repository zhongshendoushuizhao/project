# leg学习（考察arm汇编指令）

ARM的汇编编程，本质上就是针对ＣＰＵ寄存器的编程，所以我们首先要弄清楚ARM有哪些寄存器？这些寄存器都是如何使用的？

ARM寄存器分为2类，普通寄存器和状态寄存器

![image](https://github.com/zhongshendoushuizhao/project/blob/master/pwn/pwnable/picture/20180624.PNG)

 ARM状态结构小记 <http://blog.csdn.net/qq_19550513/article/details/62038580>  

ARM寄存器结构小记 <http://blog.csdn.net/qq_19550513/article/details/62044295> 

ARM属于RISC指令集，不同于 x86 CISC指令集的堆栈传参，ARM 在函数调用时倾向于寄存器传参。一般地，当参数不超过4个时，系统会使用 R0-R4 寄存器进行参数传递，超过四个才会借助堆栈。

ARM的PC永远指向当前执行指令之后的第二条指令，即处于流水线取指阶段的指令，而 x86 的 PC 指向的是当前执行的指令。

调用子函数也和 x86 不同，x86下是使用 CALL 指令，ARM下是使用 BL （带链接跳转，即当前执行指令的下一条指令保存到 R14，并跳转，进入子函数后会将 R14 的值入栈）指令。

关于返回值，x86 使用 EAX 寄存器传递返回值，ARM 使用 **R0** 传递返回值。





leg.c 文件

```c
#include <stdio.h>
#include <fcntl.h>
int key1(){
	asm("mov r3, pc\n");  //Pc 值 赋值给 r3
}
int key2(){
	asm(
	"push	{r6}\n"       //将 r6值压入栈中
	"add	r6, pc, $1\n" // r6 =  pc +$1
	"bx	r6\n"  // mov pc,lr
	".code   16\n"  // .thumb / .code16 @声明以下为thubm指令
	"mov	r3, pc\n" 
	"add	r3, $0x4\n" // r3 = r3 +$0x4
	"push	{r3}\n"  
	"pop	{pc}\n"
	".code	32\n" //.arm / .code32 @声明以下为arm指令
	"pop	{r6}\n"
	);
}
int key3(){
	asm("mov r3, lr\n");
}
int main(){
	int key=0;
	printf("Daddy has very strong arm! : ");
	scanf("%d", &key);
	if( (key1()+key2()+key3()) == key ){  //key1 key2  key3 值相加 等于 key（int） key=0
		printf("Congratz!\n");
		int fd = open("flag", O_RDONLY);
		char buf[100];
		int r = read(fd, buf, 100);
		write(0, buf, r);
	}
	else{
		printf("I have strong leg :P\n");
	}
	return 0;
}
```

leg.asm

```asm
(gdb) disass main
Dump of assembler code for function main:
   0x00008d3c <+0>:	push	{r4, r11, lr}
   0x00008d40 <+4>:	add	r11, sp, #8
   0x00008d44 <+8>:	sub	sp, sp, #12
   0x00008d48 <+12>:	mov	r3, #0
   0x00008d4c <+16>:	str	r3, [r11, #-16]
   0x00008d50 <+20>:	ldr	r0, [pc, #104]	; 0x8dc0 <main+132>
   0x00008d54 <+24>:	bl	0xfb6c <printf>
   0x00008d58 <+28>:	sub	r3, r11, #16
   0x00008d5c <+32>:	ldr	r0, [pc, #96]	; 0x8dc4 <main+136>
   0x00008d60 <+36>:	mov	r1, r3
   0x00008d64 <+40>:	bl	0xfbd8 <__isoc99_scanf>
   0x00008d68 <+44>:	bl	0x8cd4 <key1>
   0x00008d6c <+48>:	mov	r4, r0
   0x00008d70 <+52>:	bl	0x8cf0 <key2>
   0x00008d74 <+56>:	mov	r3, r0
   0x00008d78 <+60>:	add	r4, r4, r3
   0x00008d7c <+64>:	bl	0x8d20 <key3>
   0x00008d80 <+68>:	mov	r3, r0
   0x00008d84 <+72>:	add	r2, r4, r3
   0x00008d88 <+76>:	ldr	r3, [r11, #-16]
   0x00008d8c <+80>:	cmp	r2, r3
   0x00008d90 <+84>:	bne	0x8da8 <main+108>
   0x00008d94 <+88>:	ldr	r0, [pc, #44]	; 0x8dc8 <main+140>
   0x00008d98 <+92>:	bl	0x1050c <puts>
   0x00008d9c <+96>:	ldr	r0, [pc, #40]	; 0x8dcc <main+144>
   0x00008da0 <+100>:	bl	0xf89c <system>
   0x00008da4 <+104>:	b	0x8db0 <main+116>
   0x00008da8 <+108>:	ldr	r0, [pc, #32]	; 0x8dd0 <main+148>
   0x00008dac <+112>:	bl	0x1050c <puts>
   0x00008db0 <+116>:	mov	r3, #0
   0x00008db4 <+120>:	mov	r0, r3
   0x00008db8 <+124>:	sub	sp, r11, #8
   0x00008dbc <+128>:	pop	{r4, r11, pc}
   0x00008dc0 <+132>:	andeq	r10, r6, r12, lsl #9
   0x00008dc4 <+136>:	andeq	r10, r6, r12, lsr #9
   0x00008dc8 <+140>:			; <UNDEFINED> instruction: 0x0006a4b0
   0x00008dcc <+144>:			; <UNDEFINED> instruction: 0x0006a4bc
   0x00008dd0 <+148>:	andeq	r10, r6, r4, asr #9
End of assembler dump.
(gdb) disass key1
Dump of assembler code for function key1:
   0x00008cd4 <+0>:	push	{r11}		; (str r11, [sp, #-4]!)
   0x00008cd8 <+4>:	add	r11, sp, #0
   0x00008cdc <+8>:	mov	r3, pc
   0x00008ce0 <+12>:	mov	r0, r3
   0x00008ce4 <+16>:	sub	sp, r11, #0
   0x00008ce8 <+20>:	pop	{r11}		; (ldr r11, [sp], #4)
   0x00008cec <+24>:	bx	lr
End of assembler dump.

###
PC代表程序计数器，流水线使用三个阶段，因此指令分为三个阶段执行：1.取指（从存储器装载一条指令）；2.译码（识别将要被执行的指令）；3.执行（处理指令并将结果写回寄存器）。而R15
（PC）总是指向“正在取指”的指令，而不是指向“正在执行”的指令或正在“译码”的指令。一般来说，人们习惯性约定将“正在执行的指令作为参考点”，称之为当前第一条指令，因此PC总是指向第三
条指令。当ARM状态时，每条指令为4字节长，所以PC始终指向该指令地址加8字节的地址，即：PC值=当前程序执行位置+8；
ARM指令是三级流水线，取指，译指，执行时同时执行的，现在PC指向的是正在取指的地址，那么cpu正在译指的指令地址是PC-4（假设在ARM状态下，一个指令占4个字节），cpu正在执行的指令地
址是PC-8，也就是说PC所指向的地址和现在所执行的指令地址相差8。
###
# R0 = R3 = pc = 0x00008cdc + 0x8

(gdb) disass key2
Dump of assembler code for function key2:
   0x00008cf0 <+0>:	push	{r11}		; (str r11, [sp, #-4]!)
   0x00008cf4 <+4>:	add	r11, sp, #0
   0x00008cf8 <+8>:	push	{r6}		; (str r6, [sp, #-4]!)
   0x00008cfc <+12>:	add	r6, pc, #1
   0x00008d00 <+16>:	bx	r6
   0x00008d04 <+20>:	mov	r3, pc
   0x00008d06 <+22>:	adds	r3, #4
   0x00008d08 <+24>:	push	{r3}
   0x00008d0a <+26>:	pop	{pc}
   0x00008d0c <+28>:	pop	{r6}		; (ldr r6, [sp], #4)
   0x00008d10 <+32>:	mov	r0, r3
   0x00008d14 <+36>:	sub	sp, r11, #0
   0x00008d18 <+40>:	pop	{r11}		; (ldr r11, [sp], #4)
   0x00008d1c <+44>:	bx	lr
End of assembler dump.

###

arm与thumb跳转：

http://blog.csdn.net/itismine/article/details/4753701

###
#r0 = r3 = pc = 0x00008d04 + 0x8 +0x4

(gdb) disass key3
Dump of assembler code for function key3:
   0x00008d20 <+0>:	push	{r11}		; (str r11, [sp, #-4]!)
   0x00008d24 <+4>:	add	r11, sp, #0
   0x00008d28 <+8>:	mov	r3, lr
   0x00008d2c <+12>:	mov	r0, r3
   0x00008d30 <+16>:	sub	sp, r11, #0
   0x00008d34 <+20>:	pop	{r11}		; (ldr r11, [sp], #4)
   0x00008d38 <+24>:	bx	lr
End of assembler dump.

#r0 = r3 = lr = 返回地址 = 0x00008d80


(gdb) 
```

故所有 的key1、key2、key3 的和为  key =  0x00008cdc + 0x8  + 0x00008d04 + 0x8 +0x4 +0x00008d80 

转换为十进制是 108400