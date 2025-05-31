#include <stdio.h>

// Function declaration
int factorial(int n);

int main() {
    int num;
    printf("Enter a positive integer: ");
    scanf("%d", &num);

    // Call the factorial function and print result
    printf("Factorial of %d is %d\n", num, factorial(num));

    return 0;
}

// Function definition
int factorial(int n) {
    if (n == 0 || n == 1)
        return 1;
    else
        return n * factorial(n - 1);
}
