<<<<<<< HEAD
//WAP to find area of circle, rectangle and triangle
#include<stdio.h>
main(){
    float rad, len, wid, base, height, area; //data members

    printf("Enter the radius of the circle: ");
    scanf("%f", &rad);	//input radius
    area = 3.14* rad * rad;	
    printf("Area of circle: %.2f\n", area);	//two digits after point

    printf("Enter the length and width of the rectangle: ");
    scanf("%f %f", &len, &wid);	//input length and width 
    area = len* wid;
    printf("Area of the rectangle: %.2f\n", area); //two digits after point

    printf("Enter the base and height of the triangle: ");
    scanf("%f %f", &base, &height); //input base and height
    area = 0.5 * base * height;
    printf("Area of the triangle: %.2f\n", area); //two digits after point
}

=======
//WAP to find area of circle, rectangle and triangle
#include<stdio.h>
main(){
    float rad, len, wid, base, height, area; //data members

    printf("Enter the radius of the circle: ");
    scanf("%f", &rad);	//input radius
    area = 3.14* rad * rad;	
    printf("Area of circle: %.2f\n", area);	//two digits after point

    printf("Enter the length and width of the rectangle: ");
    scanf("%f %f", &len, &wid);	//input length and width 
    area = len* wid;
    printf("Area of the rectangle: %.2f\n", area); //two digits after point

    printf("Enter the base and height of the triangle: ");
    scanf("%f %f", &base, &height); //input base and height
    area = 0.5 * base * height;
    printf("Area of the triangle: %.2f\n", area); //two digits after point
}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
