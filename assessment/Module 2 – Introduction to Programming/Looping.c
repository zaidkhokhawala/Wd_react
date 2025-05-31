#include <stdio.h>

int main() {
    int i;

    // Using while loop
    i = 1;
    printf("Using while loop:\n");
    while (i <= 10) {
        printf("%d ", i);
        i++;
    }
    printf("\n");

    // Using for loop
    printf("Using for loop:\n");
    for (i = 1; i <= 10; i++) {
        printf("%d ", i);
    }
    printf("\n");

    // Using do-while loop
    i = 1;
    printf("Using do-while loop:\n");
    do {
        printf("%d ", i);
        i++;
    } while (i <= 10);
    printf("\n");

    return 0;
}
