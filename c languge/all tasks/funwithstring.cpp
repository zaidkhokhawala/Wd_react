<<<<<<< HEAD
#include <stdio.h>
#include <string.h>
 main()
 
{   char cname[40];//copy name
    char lname[40];// last name for concat
    char name[40];// main array
    printf("enter your first name : ");
    gets(name);
    printf("your name is : %s\n",name);
    printf("your name length is %d\n",strlen(name));//for find name length
    printf("your array length is%d\n",sizeof(name));//for find array size
    printf("enter your last name : ");
    gets(lname);
    printf("your last name is : %s\n",lname);
    strcat(name, lname);// concat
    printf("your merge name :%s\n",name);
    strcpy(cname,name);//copy string
    printf("copy is your text is : %s",cname);



	
	}

=======
#include <stdio.h>
#include <string.h>
 main()
 
{   char cname[40];//copy name
    char lname[40];// last name for concat
    char name[40];// main array
    printf("enter your first name : ");
    gets(name);
    printf("your name is : %s\n",name);
    printf("your name length is %d\n",strlen(name));//for find name length
    printf("your array length is%d\n",sizeof(name));//for find array size
    printf("enter your last name : ");
    gets(lname);
    printf("your last name is : %s\n",lname);
    strcat(name, lname);// concat
    printf("your merge name :%s\n",name);
    strcpy(cname,name);//copy string
    printf("copy is your text is : %s",cname);



	
	}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
