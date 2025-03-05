<<<<<<< HEAD
#include <stdio.h>
main(){
	
	
	
	int a[5],i,j,temp;
	printf("enter number");
	for(i=0;i<5;i++){
		scanf("%d",&a[i]);
	}
	for(i=0;i<5;i++){
		
		for(j=i+1;j<5;j++){
			
			if(a[j]>a[i]){
				temp=a[i];
				a[i]=a[j];
				a[j]=temp;
			}
		}
	}
	
	for(i=0;i<5;i++){
		printf("%d ",a[i]);
	}
	
}
=======
#include <stdio.h>
main(){
	
	
	
	int a[5],i,j,temp;
	printf("enter number");
	for(i=0;i<5;i++){
		scanf("%d",&a[i]);
	}
	for(i=0;i<5;i++){
		
		for(j=i+1;j<5;j++){
			
			if(a[j]>a[i]){
				temp=a[i];
				a[i]=a[j];
				a[j]=temp;
			}
		}
	}
	
	for(i=0;i<5;i++){
		printf("%d ",a[i]);
	}
	
}
>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
