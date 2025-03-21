<<<<<<< HEAD
#include <iostream>
using namespace std;

// Global variable
int globalVar = 10;

// Function to demonstrate local variable
void localScope() {
    // Local variable
    int localVar = 5;
    cout << "Inside function, local variable: " << localVar << endl;
    cout << "Inside function, global variable: " << globalVar << endl;
}

 main() {
    // Local variable in main function
    int mainVar = 20;
    
    cout << "Inside main, local variable: " << mainVar << endl;
    cout << "Inside main, global variable: " << globalVar << endl;
    
    localScope();  // Call function to demonstrate local scope

    // Uncommenting the next line will cause an error because localVar is not accessible here
    // cout << "Trying to access local variable outside function: " << localVar << endl;

}

=======
#include <iostream>
using namespace std;

// Global variable
int globalVar = 10;

// Function to demonstrate local variable
void localScope() {
    // Local variable
    int localVar = 5;
    cout << "Inside function, local variable: " << localVar << endl;
    cout << "Inside function, global variable: " << globalVar << endl;
}

 main() {
    // Local variable in main function
    int mainVar = 20;
    
    cout << "Inside main, local variable: " << mainVar << endl;
    cout << "Inside main, global variable: " << globalVar << endl;
    
    localScope();  // Call function to demonstrate local scope

    // Uncommenting the next line will cause an error because localVar is not accessible here
    // cout << "Trying to access local variable outside function: " << localVar << endl;

}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
