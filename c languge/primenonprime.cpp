<<<<<<< HEAD
#include <stdio.h>

int main() {
    int num, i;

    printf("Enter a positive integer: ");
    scanf("%d", &num);

    if (num <= 1) {
        printf("Non-Prime\n");
        return 0;
    }

    for (i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            printf("Non-Prime\n");
            return 0;
        }
    }

    printf("Prime\n");
    return 0;
}

=======
#include <stdio.h>

int main() {
    int num, i;

    printf("Enter a positive integer: ");
    scanf("%d", &num);

    if (num <= 1) {
        printf("Non-Prime\n");
        return 0;
    }

    for (i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            printf("Non-Prime\n");
            return 0;
        }
    }

    printf("Prime\n");
    return 0;
}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
