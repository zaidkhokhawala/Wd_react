<<<<<<< HEAD
#include <stdio.h>

int main() {
    int a[4], b[4], sum[4];  // Arrays for inputs and sum
    int i;

    // Input for the first array
    for (i = 0; i < 4; i++) {
        printf("Enter 4 numbers for the first array: ");
        scanf("%d", &a[i]);
    }

    // Input for the second array
    for (i = 0; i < 4; i++) {
        printf("Enter 4 numbers for the second array: ");
        scanf("%d", &b[i]);
    }

    // Adding the two arrays
    for (i = 0; i < 4; i++) {
        sum[i] = a[i] + b[i];
    }

    // Printing the result
    printf("Sum of the two arrays:\n");
    for (i = 0; i < 4; i++) {
        printf("%d\n", sum[i]);
    }

    return 0;
}

=======
#include <stdio.h>

int main() {
    int a[4], b[4], sum[4];  // Arrays for inputs and sum
    int i;

    // Input for the first array
    for (i = 0; i < 4; i++) {
        printf("Enter 4 numbers for the first array: ");
        scanf("%d", &a[i]);
    }

    // Input for the second array
    for (i = 0; i < 4; i++) {
        printf("Enter 4 numbers for the second array: ");
        scanf("%d", &b[i]);
    }

    // Adding the two arrays
    for (i = 0; i < 4; i++) {
        sum[i] = a[i] + b[i];
    }

    // Printing the result
    printf("Sum of the two arrays:\n");
    for (i = 0; i < 4; i++) {
        printf("%d\n", sum[i]);
    }

    return 0;
}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
