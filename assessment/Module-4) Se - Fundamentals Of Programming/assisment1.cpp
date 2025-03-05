<<<<<<< HEAD
#include <stdio.h>

// Function to display the food menu
 displayMenu() {
    printf("\n--- Food Menu ---\n");
    printf("1. Pizza       - Rs. 200\n");
    printf("2. Burger      - Rs. 100\n");
    printf("3. Sandwich    - Rs. 150\n");
    printf("4. Pasta       - Rs. 250\n");
    printf("5. Exit Menu\n");
    printf("-----------------\n");
}

 main() {
    int choice, quantity;
    int totalBill = 0;  // Variable to store the total bill
    char moreOrder;     // Variable to check if the user wants to order more

    printf("Welcome to the Food Billing System!\n");

    do {
        displayMenu();  // Display the menu
        
        // Prompt the user to select a food item
        printf("Please select a food item (1-5): ");
        scanf("%d", &choice);
        
        if (choice == 5) {
            // Exit condition
            printf("Thank you for visiting!\n");
            break;
        }

        // Take the quantity of the selected food item
        printf("Enter the quantity: ");
        scanf("%d", &quantity);

        // Calculate the bill based on the choice using if-else
        if (choice == 1) {
            printf("You ordered Pizza x %d\n", quantity);
            totalBill += 200 * quantity;  // Add price of pizza to total bill
        } else if (choice == 2) {
            printf("You ordered Burger x %d\n", quantity);
            totalBill += 100 * quantity;  // Add price of burger to total bill
        } else if (choice == 3) {
            printf("You ordered Sandwich x %d\n", quantity);
            totalBill += 150 * quantity;  // Add price of sandwich to total bill
        } else if (choice == 4) {
            printf("You ordered Pasta x %d\n", quantity);
            totalBill += 250 * quantity;  // Add price of pasta to total bill
        } else {
            printf("Invalid choice! Please select a valid item.\n");
        }

        // Ask the user if they want to order more
        printf("\nDo you want to order more items? (y/n): ");
        scanf(" %c", &moreOrder);

    } while (moreOrder == 'y' || moreOrder == 'Y');  // Continue until user says 'n'

    // Display the final bill
    printf("\n--- Final Bill ---\n");
    printf("Total Amount to be Paid: Rs. %d\n", totalBill);
    printf("Thank you! Visit Again!\n");

}
=======
#include <stdio.h>

// Function to display the food menu
 displayMenu() {
    printf("\n--- Food Menu ---\n");
    printf("1. Pizza       - Rs. 200\n");
    printf("2. Burger      - Rs. 100\n");
    printf("3. Sandwich    - Rs. 150\n");
    printf("4. Pasta       - Rs. 250\n");
    printf("5. Exit Menu\n");
    printf("-----------------\n");
}

 main() {
    int choice, quantity;
    int totalBill = 0;  // Variable to store the total bill
    char moreOrder;     // Variable to check if the user wants to order more

    printf("Welcome to the Food Billing System!\n");

    do {
        displayMenu();  // Display the menu
        
        // Prompt the user to select a food item
        printf("Please select a food item (1-5): ");
        scanf("%d", &choice);
        
        if (choice == 5) {
            // Exit condition
            printf("Thank you for visiting!\n");
            break;
        }

        // Take the quantity of the selected food item
        printf("Enter the quantity: ");
        scanf("%d", &quantity);

        // Calculate the bill based on the choice using if-else
        if (choice == 1) {
            printf("You ordered Pizza x %d\n", quantity);
            totalBill += 200 * quantity;  // Add price of pizza to total bill
        } else if (choice == 2) {
            printf("You ordered Burger x %d\n", quantity);
            totalBill += 100 * quantity;  // Add price of burger to total bill
        } else if (choice == 3) {
            printf("You ordered Sandwich x %d\n", quantity);
            totalBill += 150 * quantity;  // Add price of sandwich to total bill
        } else if (choice == 4) {
            printf("You ordered Pasta x %d\n", quantity);
            totalBill += 250 * quantity;  // Add price of pasta to total bill
        } else {
            printf("Invalid choice! Please select a valid item.\n");
        }

        // Ask the user if they want to order more
        printf("\nDo you want to order more items? (y/n): ");
        scanf(" %c", &moreOrder);

    } while (moreOrder == 'y' || moreOrder == 'Y');  // Continue until user says 'n'

    // Display the final bill
    printf("\n--- Final Bill ---\n");
    printf("Total Amount to be Paid: Rs. %d\n", totalBill);
    printf("Thank you! Visit Again!\n");

}
>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
