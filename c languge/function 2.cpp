<<<<<<< HEAD
#include <stdio.h>

int main() {
    int choice = 0;

    while (choice != 3) {
        // Display menu
        printf("MENU:\n");
        printf("1. Coffee\n");
        printf("2. Tea\n");
        printf("3. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        // Perform action based on choice
        switch (choice) {
            case 1:
                printf("Enjoy your Coffee!\n");
                break;
            case 2:
                printf("Enjoy your Tea!\n");
                break;
            case 3:
                printf("Exiting the program. Goodbye!\n");
                break;
            default:
                printf("Invalid choice. Please try again.\n");
        }
    }

    return 0;
}

=======
#include <stdio.h>

int main() {
    int choice = 0;

    while (choice != 3) {
        // Display menu
        printf("MENU:\n");
        printf("1. Coffee\n");
        printf("2. Tea\n");
        printf("3. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        // Perform action based on choice
        switch (choice) {
            case 1:
                printf("Enjoy your Coffee!\n");
                break;
            case 2:
                printf("Enjoy your Tea!\n");
                break;
            case 3:
                printf("Exiting the program. Goodbye!\n");
                break;
            default:
                printf("Invalid choice. Please try again.\n");
        }
    }

    return 0;
}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
