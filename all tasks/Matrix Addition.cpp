<<<<<<< HEAD
#include <iostream>
using namespace std;

 main() {
    // Declare two 2x2 matrices
    int matrix1[2][2], matrix2[2][2], result[2][2];

    // Accept elements for first matrix
    cout << "Enter elements for first 2x2 matrix:" << endl;
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            cin >> matrix1[i][j];
        }
    }

    // Accept elements for second matrix
    cout << "Enter elements for second 2x2 matrix:" << endl;
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            cin >> matrix2[i][j];
        }
    }

    // Perform matrix addition
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    // Display the result of matrix addition
    cout << "Resultant Matrix after addition:" << endl;
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            cout << result[i][j] << " ";
        }
        cout << endl;
    }

}

=======
#include <iostream>
using namespace std;

 main() {
    // Declare two 2x2 matrices
    int matrix1[2][2], matrix2[2][2], result[2][2];

    // Accept elements for first matrix
    cout << "Enter elements for first 2x2 matrix:" << endl;
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            cin >> matrix1[i][j];
        }
    }

    // Accept elements for second matrix
    cout << "Enter elements for second 2x2 matrix:" << endl;
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            cin >> matrix2[i][j];
        }
    }

    // Perform matrix addition
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    // Display the result of matrix addition
    cout << "Resultant Matrix after addition:" << endl;
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            cout << result[i][j] << " ";
        }
        cout << endl;
    }

}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
