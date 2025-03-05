<<<<<<< HEAD
#include <stdio.h>
 main() {
    int a[4], sum = 0;
    int i;
    for (i = 0; i < 4; i++) {
        printf("Enter number: ");
        scanf("%d", &a[i]);  // Corrected here
        
    }
    for (i = 0; i < 4; i++) {
        printf("%d\n", a[i]);
        sum += a[i];
    }
    printf("Sum: %d\n", sum);  // Added to display the sum
   
}

=======
#include <stdio.h>
 main() {
    int a[4], sum = 0;
    int i;
    for (i = 0; i < 4; i++) {
        printf("Enter number: ");
        scanf("%d", &a[i]);  // Corrected here
        
    }
    for (i = 0; i < 4; i++) {
        printf("%d\n", a[i]);
        sum += a[i];
    }
    printf("Sum: %d\n", sum);  // Added to display the sum
   
}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
