<<<<<<< HEAD
#include <iostream>
using namespace std;

 main() {
    int secretNumber = 42, guess;

    cout << "Guess the number between 1 and 100: ";

    // Allow multiple attempts
    while (true) {
        cin >> guess;

        if (guess > secretNumber) {
            cout << "Too high! Try again: ";
        } else if (guess < secretNumber) {
            cout << "Too low! Try again: ";
        } else {
            cout << "Congratulations! You guessed the number." << endl;
            break;  // Exit the loop if the guess is correct
        }
    }

}

=======
#include <iostream>
using namespace std;

 main() {
    int secretNumber = 42, guess;

    cout << "Guess the number between 1 and 100: ";

    // Allow multiple attempts
    while (true) {
        cin >> guess;

        if (guess > secretNumber) {
            cout << "Too high! Try again: ";
        } else if (guess < secretNumber) {
            cout << "Too low! Try again: ";
        } else {
            cout << "Congratulations! You guessed the number." << endl;
            break;  // Exit the loop if the guess is correct
        }
    }

}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
