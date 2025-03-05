<<<<<<< HEAD
#include <iostream>
#include <string>
#include <iomanip> // For formatting output

using namespace std;

// Class to represent the Food Ordering System
class FoodOrderingSystem {
private:
    string customerName;
    int totalBill;

public:
    // Constructor
    FoodOrderingSystem() {
        totalBill = 0; // Initialize the total bill
    }

    // Function to display the food menu
    void displayMenu() {
        cout << "\n--- Food Menu ---\n";
        cout << "1. Pizza       - Rs. 200\n";
        cout << "2. Burger      - Rs. 100\n";
        cout << "3. Sandwich    - Rs. 150\n";
        cout << "4. Pasta       - Rs. 250\n";
        cout << "5. Exit\n";
        cout << "-----------------\n";
    }

    // Function to take an order
    void takeOrder() {
        int choice, quantity;
        char continueOrder;

        do {
            displayMenu(); // Show the menu
            cout << "Enter your choice (1-5): ";
            cin >> choice;

            if (choice == 5) {
                cout << "Exiting order. Thank you!\n";
                break;
            }

            cout << "Enter the quantity: ";
            cin >> quantity;

            // Calculate the bill using switch-case
            switch (choice) {
                case 1:
                    cout << "You ordered Pizza x " << quantity << "\n";
                    totalBill += 200 * quantity; // Add price of pizza to the bill
                    break;
                case 2:
                    cout << "You ordered Burger x " << quantity << "\n";
                    totalBill += 100 * quantity; // Add price of burger to the bill
                    break;
                case 3:
                    cout << "You ordered Sandwich x " << quantity << "\n";
                    totalBill += 150 * quantity; // Add price of sandwich to the bill
                    break;
                case 4:
                    cout << "You ordered Pasta x " << quantity << "\n";
                    totalBill += 250 * quantity; // Add price of pasta to the bill
                    break;
                default:
                    cout << "Invalid choice! Please choose a valid item.\n";
                    break;
            }

            // Ask if the user wants to continue ordering
            cout << "Do you want to order more? (y/n): ";
            cin >> continueOrder;

        } while (continueOrder == 'y' || continueOrder == 'Y');

        // Display the final bill
        displayBill();
    }

    // Function to display the final bill
    void displayBill() {
        cout << "\n--- Final Bill ---\n";
        cout << "Customer Name: " << customerName << "\n";
        cout << "Total Amount: Rs. " << totalBill << "\n";
        cout << "Thank you for ordering! Visit Again!\n";
    }

    // Function to get customer name
    void getCustomerName() {
        cout << "Enter your name: ";
        getline(cin, customerName);
    }

    // Function to start the ordering system
    void startOrdering() {
        cout << "Welcome to the Food Ordering System!\n";
        getCustomerName();
        takeOrder();
    }
};

// Main function
 main() {
    // Create an instance of FoodOrderingSystem
    FoodOrderingSystem orderSystem;

    // Start the ordering system
    orderSystem.startOrdering();

    // Program ends here
}

=======
#include <iostream>
#include <string>
#include <iomanip> // For formatting output

using namespace std;

// Class to represent the Food Ordering System
class FoodOrderingSystem {
private:
    string customerName;
    int totalBill;

public:
    // Constructor
    FoodOrderingSystem() {
        totalBill = 0; // Initialize the total bill
    }

    // Function to display the food menu
    void displayMenu() {
        cout << "\n--- Food Menu ---\n";
        cout << "1. Pizza       - Rs. 200\n";
        cout << "2. Burger      - Rs. 100\n";
        cout << "3. Sandwich    - Rs. 150\n";
        cout << "4. Pasta       - Rs. 250\n";
        cout << "5. Exit\n";
        cout << "-----------------\n";
    }

    // Function to take an order
    void takeOrder() {
        int choice, quantity;
        char continueOrder;

        do {
            displayMenu(); // Show the menu
            cout << "Enter your choice (1-5): ";
            cin >> choice;

            if (choice == 5) {
                cout << "Exiting order. Thank you!\n";
                break;
            }

            cout << "Enter the quantity: ";
            cin >> quantity;

            // Calculate the bill using switch-case
            switch (choice) {
                case 1:
                    cout << "You ordered Pizza x " << quantity << "\n";
                    totalBill += 200 * quantity; // Add price of pizza to the bill
                    break;
                case 2:
                    cout << "You ordered Burger x " << quantity << "\n";
                    totalBill += 100 * quantity; // Add price of burger to the bill
                    break;
                case 3:
                    cout << "You ordered Sandwich x " << quantity << "\n";
                    totalBill += 150 * quantity; // Add price of sandwich to the bill
                    break;
                case 4:
                    cout << "You ordered Pasta x " << quantity << "\n";
                    totalBill += 250 * quantity; // Add price of pasta to the bill
                    break;
                default:
                    cout << "Invalid choice! Please choose a valid item.\n";
                    break;
            }

            // Ask if the user wants to continue ordering
            cout << "Do you want to order more? (y/n): ";
            cin >> continueOrder;

        } while (continueOrder == 'y' || continueOrder == 'Y');

        // Display the final bill
        displayBill();
    }

    // Function to display the final bill
    void displayBill() {
        cout << "\n--- Final Bill ---\n";
        cout << "Customer Name: " << customerName << "\n";
        cout << "Total Amount: Rs. " << totalBill << "\n";
        cout << "Thank you for ordering! Visit Again!\n";
    }

    // Function to get customer name
    void getCustomerName() {
        cout << "Enter your name: ";
        getline(cin, customerName);
    }

    // Function to start the ordering system
    void startOrdering() {
        cout << "Welcome to the Food Ordering System!\n";
        getCustomerName();
        takeOrder();
    }
};

// Main function
 main() {
    // Create an instance of FoodOrderingSystem
    FoodOrderingSystem orderSystem;

    // Start the ordering system
    orderSystem.startOrdering();

    // Program ends here
}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
