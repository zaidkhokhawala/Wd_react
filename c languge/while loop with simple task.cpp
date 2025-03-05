<<<<<<< HEAD
#include<stdio.h>
main()
{
	int n, i=1,ev=0 , od=0 , sum=0 , sum1=0;
	while(i<=5)
	{
	printf("\nenter number : ");
	scanf("%d" , &n);
	if(n%2==0)
	{
		printf("\n%d is even" , n);
		ev++;
		sum=sum+n;
	}
	else
	{
			printf("\n%d is odd" , n);
		od++;
		sum1=sum1+n;
	}
	i++;
	}
			printf("\ncount of even : %d" , ev);
			printf("\ncount of odd : %d" , od);
			printf("\neven  : %d" , sum);
			printf("\nodd  : %d" , sum1);

	
}

=======
#include<stdio.h>
main()
{
	int n, i=1,ev=0 , od=0 , sum=0 , sum1=0;
	while(i<=5)
	{
	printf("\nenter number : ");
	scanf("%d" , &n);
	if(n%2==0)
	{
		printf("\n%d is even" , n);
		ev++;
		sum=sum+n;
	}
	else
	{
			printf("\n%d is odd" , n);
		od++;
		sum1=sum1+n;
	}
	i++;
	}
			printf("\ncount of even : %d" , ev);
			printf("\ncount of odd : %d" , od);
			printf("\neven  : %d" , sum);
			printf("\nodd  : %d" , sum1);

	
}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
