#include <stdio.h>

main() {
    int choice;
    float num1, num2, result;

    // Display menu
    printf("Menu:\n");
    printf("1. Addition\n");
    printf("2. Subtraction\n");
    printf("3. Multiplication\n");
    printf("4. Division\n");
    printf("5. Exit\n");

    while (1) {
        
        printf("Enter your choice :: ");
        scanf("%d", &choice);//print choice

        
        if (choice == 5) {
            printf("Exiting the program.\n");
            break;
        }

       
        printf("Enter two numbers: ");
        scanf("%f %f", &num1, &num2);//enter values

        
        switch (choice) {
            case 1:
                result = num1 + num2;
                printf("Result: %.2f + %.2f = %.2f\n", num1, num2, result);
                break;
            case 2:
                result = num1 - num2;
                printf("Result: %.2f - %.2f = %.2f\n", num1, num2, result);
                break;
            case 3:
                result = num1 * num2;
                printf("Result: %.2f * %.2f = %.2f\n", num1, num2, result);
                break;
            case 4:
                if (num2 != 0) {
                    result = num1 / num2;
                    printf("Result: %.2f / %.2f = %.2f\n", num1, num2, result);
                } else {
                    printf("Error: Division by zero is not allowed.\n");
                }
                break;
            default:
                printf("Invalid choice! Please choose a valid option from the menu.\n");
        }
        printf("\n"); 
    }

}

