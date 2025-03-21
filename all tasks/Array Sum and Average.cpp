<<<<<<< HEAD
#include <iostream>
using namespace std;

 main() {
    int n;

    // Accept size of the array
    cout << "Enter the number of elements: ";
    cin >> n;

    int arr[n];
    int sum = 0;

    // Accept array elements
    cout << "Enter " << n << " elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
        sum += arr[i];  // Calculate sum
    }

    // Calculate average
    float average = static_cast<float>(sum) / n;

    // Display sum and average
    cout << "Sum: " << sum << endl;
    cout << "Average: " << average << endl;

}

=======
#include <iostream>
using namespace std;

 main() {
    int n;

    // Accept size of the array
    cout << "Enter the number of elements: ";
    cin >> n;

    int arr[n];
    int sum = 0;

    // Accept array elements
    cout << "Enter " << n << " elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
        sum += arr[i];  // Calculate sum
    }

    // Calculate average
    float average = static_cast<float>(sum) / n;

    // Display sum and average
    cout << "Sum: " << sum << endl;
    cout << "Average: " << average << endl;

}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
