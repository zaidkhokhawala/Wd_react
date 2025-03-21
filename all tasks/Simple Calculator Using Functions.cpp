<<<<<<< HEAD
#include <iostream>
using namespace std;

// Function prototypes
float add(float a, float b);
float subtract(float a, float b);
float multiply(float a, float b);
float divide(float a, float b);

 main() {
    float num1, num2;
    char operation;

    cout << "Enter two numbers: ";
    cin >> num1 >> num2;

    cout << "Enter operation (+, -, *, /): ";
    cin >> operation;

    // Perform operation based on user input
    if (operation == '+') {
        cout << "Result: " << add(num1, num2) << endl;
    } else if (operation == '-') {
        cout << "Result: " << subtract(num1, num2) << endl;
    } else if (operation == '*') {
        cout << "Result: " << multiply(num1, num2) << endl;
    } else if (operation == '/') {
        if (num2 != 0)
            cout << "Result: " << divide(num1, num2) << endl;
        else
            cout << "Error: Division by zero!" << endl;
    } else {
        cout << "Invalid operation!" << endl;
    }

}

// Function definitions
float add(float a, float b) {
    return a + b;
}

float subtract(float a, float b) {
    return a - b;
}

float multiply(float a, float b) {
    return a * b;
}

float divide(float a, float b) {
    return a / b;
}

=======
#include <iostream>
using namespace std;

// Function prototypes
float add(float a, float b);
float subtract(float a, float b);
float multiply(float a, float b);
float divide(float a, float b);

 main() {
    float num1, num2;
    char operation;

    cout << "Enter two numbers: ";
    cin >> num1 >> num2;

    cout << "Enter operation (+, -, *, /): ";
    cin >> operation;

    // Perform operation based on user input
    if (operation == '+') {
        cout << "Result: " << add(num1, num2) << endl;
    } else if (operation == '-') {
        cout << "Result: " << subtract(num1, num2) << endl;
    } else if (operation == '*') {
        cout << "Result: " << multiply(num1, num2) << endl;
    } else if (operation == '/') {
        if (num2 != 0)
            cout << "Result: " << divide(num1, num2) << endl;
        else
            cout << "Error: Division by zero!" << endl;
    } else {
        cout << "Invalid operation!" << endl;
    }

}

// Function definitions
float add(float a, float b) {
    return a + b;
}

float subtract(float a, float b) {
    return a - b;
}

float multiply(float a, float b) {
    return a * b;
}

float divide(float a, float b) {
    return a / b;
}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
