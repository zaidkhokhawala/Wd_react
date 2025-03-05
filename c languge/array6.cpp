<<<<<<< HEAD
#include <stdio.h>

int main() {
    int a[2][3], b[2][3];
    int i, j;

    // Input for matrix a
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 3; j++) {
            printf("Enter Number for a[%d][%d]: ", i, j);
            scanf("%d", &a[i][j]);
        }
    }

    // Input for matrix b
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 3; j++) {
            printf("Enter Number for b[%d][%d]: ", i, j);
            scanf("%d", &b[i][j]);
        }
    }

    // Display matrix a
    printf("\nMatrix a:\n");
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 3; j++) {
            printf("%d\t", a[i][j]);
        }
        printf("\n");
    }

    // Display matrix b
    printf("\nMatrix b:\n");
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 3; j++) {
            printf("%d\t", b[i][j]);
        }
        printf("\n");
    }

    // Display addition of matrices a and b
    printf("\nAddition of matrices a and b:\n");
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 3; j++) {
            printf("%d\t", a[i][j] + b[i][j]);
        }
        printf("\n");
    }

    return 0;
}

=======
#include <stdio.h>

int main() {
    int a[2][3], b[2][3];
    int i, j;

    // Input for matrix a
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 3; j++) {
            printf("Enter Number for a[%d][%d]: ", i, j);
            scanf("%d", &a[i][j]);
        }
    }

    // Input for matrix b
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 3; j++) {
            printf("Enter Number for b[%d][%d]: ", i, j);
            scanf("%d", &b[i][j]);
        }
    }

    // Display matrix a
    printf("\nMatrix a:\n");
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 3; j++) {
            printf("%d\t", a[i][j]);
        }
        printf("\n");
    }

    // Display matrix b
    printf("\nMatrix b:\n");
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 3; j++) {
            printf("%d\t", b[i][j]);
        }
        printf("\n");
    }

    // Display addition of matrices a and b
    printf("\nAddition of matrices a and b:\n");
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 3; j++) {
            printf("%d\t", a[i][j] + b[i][j]);
        }
        printf("\n");
    }

    return 0;
}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
