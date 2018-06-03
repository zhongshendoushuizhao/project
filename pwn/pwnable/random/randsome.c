#include <stdio.h>

int main(){
	unsigned int random;
        unsigned int a = 0;
	random = rand();	// random value!
	
	printf("random:%d\n",random);
	a = (unsigned int)0xdeadbeef;
	printf("a:%x________%ld",0xdeadbeef,0xdeadbeef);
	printf("data:%ld",(random^a));
}
