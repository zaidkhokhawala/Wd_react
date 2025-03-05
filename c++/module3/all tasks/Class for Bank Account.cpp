<<<<<<< HEAD
#include <iostream>
using namespace std;

class BankAccount {
private:
    float balance;  // Private data member for balance

public:
    // Constructor to initialize balance
    BankAccount(float initialBalance) {
        balance = initialBalance;
    }

    // Member function to deposit money
    void deposit(float amount) {
        if (amount > 0) {
            balance += amount;
            cout << "Deposited: " << amount << endl;
        } else {
            cout << "Invalid deposit amount!" << endl;
        }
    }

    // Member function to withdraw money
    void withdraw(float amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            cout << "Withdrawn: " << amount << endl;
        } else if (amount > balance) {
            cout << "Insufficient funds!" << endl;
        } else {
            cout << "Invalid withdrawal amount!" << endl;
        }
    }

    // Member function to display the balance
    void displayBalance() const {
        cout << "Current balance: " << balance << endl;
    }
};

 main() {
    BankAccount account(500);  // Create account with an initial balance of 500

    account.displayBalance();  // Display initial balance

    account.deposit(200);  // Deposit 200
    account.withdraw(100); // Withdraw 100
    account.withdraw(700); // Attempt to withdraw more than available balance

    account.displayBalance();  // Display updated balance

}

=======
#include <iostream>
using namespace std;

class BankAccount {
private:
    float balance;  // Private data member for balance

public:
    // Constructor to initialize balance
    BankAccount(float initialBalance) {
        balance = initialBalance;
    }

    // Member function to deposit money
    void deposit(float amount) {
        if (amount > 0) {
            balance += amount;
            cout << "Deposited: " << amount << endl;
        } else {
            cout << "Invalid deposit amount!" << endl;
        }
    }

    // Member function to withdraw money
    void withdraw(float amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            cout << "Withdrawn: " << amount << endl;
        } else if (amount > balance) {
            cout << "Insufficient funds!" << endl;
        } else {
            cout << "Invalid withdrawal amount!" << endl;
        }
    }

    // Member function to display the balance
    void displayBalance() const {
        cout << "Current balance: " << balance << endl;
    }
};

 main() {
    BankAccount account(500);  // Create account with an initial balance of 500

    account.displayBalance();  // Display initial balance

    account.deposit(200);  // Deposit 200
    account.withdraw(100); // Withdraw 100
    account.withdraw(700); // Attempt to withdraw more than available balance

    account.displayBalance();  // Display updated balance

}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
