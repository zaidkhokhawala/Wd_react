<<<<<<< HEAD
#include <stdio.h>
main(){
	
	int a,i,count=0;
	printf("enter your number\n");
	scanf("%d",&a);
    for (i=1;i<=a;i++){
    	if(a%i==0){
    		count++;
		}
	}
	if(count==2){
		printf("number is prime");
	}
	else{
				printf("number is non-prime");

	}
}
=======
#include <stdio.h>
main(){
	
	int a,i,count=0;
	printf("enter your number\n");
	scanf("%d",&a);
    for (i=1;i<=a;i++){
    	if(a%i==0){
    		count++;
		}
	}
	if(count==2){
		printf("number is prime");
	}
	else{
				printf("number is non-prime");

	}
}
>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
