#include <stdio.h>

int main() {
    int i;

    // Using break to stop at 5
    printf("Using break statement:\n");
    for (i = 1; i <= 10; i++) {
        if (i == 5) {
            break; // Exit loop when i is 5
        }
        printf("%d ", i);
    }
    printf("\n");

    // Using continue to skip 3
    printf("Using continue statement:\n");
    for (i = 1; i <= 10; i++) {
        if (i == 3) {
            continue; // Skip printing 3
        }
        printf("%d ", i);
    }
    printf("\n");

    return 0;
}
