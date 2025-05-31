#include <stdio.h>

int main() {
    int arr1D[5] = {1, 2, 3, 4, 5};
    int arr2D[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    int i, j, sum = 0;

    // Print 1D array
    printf("1D array elements: ");
    for (i = 0; i < 5; i++) {
        printf("%d ", arr1D[i]);
    }
    printf("\n");

    // Sum elements of 2D array
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            sum += arr2D[i][j];
        }
    }
    printf("Sum of 2D array elements = %d\n", sum);

    return 0;
}
