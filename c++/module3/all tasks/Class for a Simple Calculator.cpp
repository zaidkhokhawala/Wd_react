<<<<<<< HEAD
#include <iostream>
using namespace std;

// Define the Calculator class
class Calculator {
public:
    // Function for addition
    float add(float a, float b) {
        return a + b;
    }

    // Function for subtraction
    float subtract(float a, float b) {
        return a - b;
    }

    // Function for multiplication
    float multiply(float a, float b) {
        return a * b;
    }

    // Function for division
    float divide(float a, float b) {
        if (b != 0) {
            return a / b;
        } else {
            cout << "Error: Division by zero!" << endl;
            return 0;
        }
    }
};

 main() {
    Calculator calc;  // Create object of Calculator class
    float num1, num2;
    char operation;

    cout << "Enter two numbers: ";
    cin >> num1 >> num2;

    cout << "Enter operation (+, -, *, /): ";
    cin >> operation;

    // Perform operation based on user input
    if (operation == '+') {
        cout << "Result: " << calc.add(num1, num2) << endl;
    } else if (operation == '-') {
        cout << "Result: " << calc.subtract(num1, num2) << endl;
    } else if (operation == '*') {
        cout << "Result: " << calc.multiply(num1, num2) << endl;
    } else if (operation == '/') {
        cout << "Result: " << calc.divide(num1, num2) << endl;
    } else {
        cout << "Invalid operation!" << endl;
    }

}

=======
#include <iostream>
using namespace std;

// Define the Calculator class
class Calculator {
public:
    // Function for addition
    float add(float a, float b) {
        return a + b;
    }

    // Function for subtraction
    float subtract(float a, float b) {
        return a - b;
    }

    // Function for multiplication
    float multiply(float a, float b) {
        return a * b;
    }

    // Function for division
    float divide(float a, float b) {
        if (b != 0) {
            return a / b;
        } else {
            cout << "Error: Division by zero!" << endl;
            return 0;
        }
    }
};

 main() {
    Calculator calc;  // Create object of Calculator class
    float num1, num2;
    char operation;

    cout << "Enter two numbers: ";
    cin >> num1 >> num2;

    cout << "Enter operation (+, -, *, /): ";
    cin >> operation;

    // Perform operation based on user input
    if (operation == '+') {
        cout << "Result: " << calc.add(num1, num2) << endl;
    } else if (operation == '-') {
        cout << "Result: " << calc.subtract(num1, num2) << endl;
    } else if (operation == '*') {
        cout << "Result: " << calc.multiply(num1, num2) << endl;
    } else if (operation == '/') {
        cout << "Result: " << calc.divide(num1, num2) << endl;
    } else {
        cout << "Invalid operation!" << endl;
    }

}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
