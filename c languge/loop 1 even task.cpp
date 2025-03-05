<<<<<<< HEAD
#include <stdio.h>

 main() {
    int n,i ,ev = 0, od = 0, sum = 0, sum1 = 0;

    for ( i = 1; i <= 5; i++) {
        printf("\nEnter number: ");
        scanf("%d", &n);
        
        if (n % 2 == 0) {
            printf("\n%d is even", n);
            ev++;
            sum += n;
        } else {
            printf("\n%d is odd", n);
            od++;
            sum1 += n;
        }
    }

    printf("\nCount of even: %d", ev);
    printf("\nCount of odd: %d", od);
    printf("\nSum of even: %d", sum);
    printf("\nSum of odd: %d", sum1);

    
}

=======
#include <stdio.h>

 main() {
    int n,i ,ev = 0, od = 0, sum = 0, sum1 = 0;

    for ( i = 1; i <= 5; i++) {
        printf("\nEnter number: ");
        scanf("%d", &n);
        
        if (n % 2 == 0) {
            printf("\n%d is even", n);
            ev++;
            sum += n;
        } else {
            printf("\n%d is odd", n);
            od++;
            sum1 += n;
        }
    }

    printf("\nCount of even: %d", ev);
    printf("\nCount of odd: %d", od);
    printf("\nSum of even: %d", sum);
    printf("\nSum of odd: %d", sum1);

    
}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
