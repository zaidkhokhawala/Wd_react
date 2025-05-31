#include <stdio.h>

int main() {
    int num = 10;
    int *ptr = &num; // Pointer pointing to num's address

    printf("Before change: num = %d\n", num);

    // Modify num using pointer
    *ptr = 20;

    printf("After change: num = %d\n", num);

    return 0;
}
