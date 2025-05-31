#include <stdio.h>

int main() {
    int a, b;
    printf("Enter two integers: ");
    scanf("%d %d", &a, &b);

    // Arithmetic operations
    printf("Addition: %d + %d = %d\n", a, b, a + b);
    printf("Subtraction: %d - %d = %d\n", a, b, a - b);
    printf("Multiplication: %d * %d = %d\n", a, b, a * b);
    if (b != 0) {
        printf("Division: %d / %d = %d\n", a, b, a / b);
        printf("Modulo: %d %% %d = %d\n", a, b, a % b);
    } else {
        printf("Division and modulo by zero not allowed.\n");
    }

    // Relational operations
    printf("Is %d equal to %d? %d\n", a, b, a == b);
    printf("Is %d not equal to %d? %d\n", a, b, a != b);
    printf("Is %d greater than %d? %d\n", a, b, a > b);
    printf("Is %d less than or equal to %d? %d\n", a, b, a <= b);

    // Logical operations
    printf("Logical AND: (%d > 0) && (%d > 0) = %d\n", a, b, (a > 0) && (b > 0));
    printf("Logical OR: (%d > 0) || (%d > 0) = %d\n", a, b, (a > 0) || (b > 0));
    printf("Logical NOT: !(%d > 0) = %d\n", a, !(a > 0));

    return 0;
}
