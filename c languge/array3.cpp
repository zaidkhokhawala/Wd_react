<<<<<<< HEAD
#include <stdio.h>

 main() {
    int a[4], sum = 0;
    int i, j, temp;
    for (i = 0; i < 4; i++) {
        printf("Enter number: ");
        scanf("%d", &a[i]);
        sum += a[i];
    }
    for (i = 0; i < 4; i++) {
        for (j = i + 1; j < 4; j++) {
            if (a[i] < a[j]) {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    for (i = 0; i < 4; i++) {
        printf("%d\n", a[i]);
    }
    printf("Sum: %d\n", sum);
}

=======
#include <stdio.h>

 main() {
    int a[4], sum = 0;
    int i, j, temp;
    for (i = 0; i < 4; i++) {
        printf("Enter number: ");
        scanf("%d", &a[i]);
        sum += a[i];
    }
    for (i = 0; i < 4; i++) {
        for (j = i + 1; j < 4; j++) {
            if (a[i] < a[j]) {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    for (i = 0; i < 4; i++) {
        printf("%d\n", a[i]);
    }
    printf("Sum: %d\n", sum);
}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
