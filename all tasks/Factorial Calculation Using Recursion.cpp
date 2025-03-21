<<<<<<< HEAD
#include <iostream>
using namespace std;

// Function to calculate factorial using recursion
int factorial(int n) {
    if (n <= 1) {
        return 1;  // Base case: factorial of 0 or 1 is 1
    } else {
        return n * factorial(n - 1);  // Recursive case
    }
}

int main() {
    int num;

    cout << "Enter a number: ";
    cin >> num;

    cout << "Factorial of " << num << " is: " << factorial(num) << endl;

}

=======
#include <iostream>
using namespace std;

// Function to calculate factorial using recursion
int factorial(int n) {
    if (n <= 1) {
        return 1;  // Base case: factorial of 0 or 1 is 1
    } else {
        return n * factorial(n - 1);  // Recursive case
    }
}

int main() {
    int num;

    cout << "Enter a number: ";
    cin >> num;

    cout << "Factorial of " << num << " is: " << factorial(num) << endl;

}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
