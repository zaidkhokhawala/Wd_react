#include <stdio.h>


findMax(int arr[], int size) {
    int max = arr[0],i; 
    
    for ( i = 1; i < size; i++) {//find max array
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }
    
    return max; 
}

{
    int n; 
    
   
    printf("Enter the number of elements in the array: ");
    scanf("%d", &n);
    
    int arr[n],i;


    printf("Enter %d elements:\n", n);
    for ( i = 0; i < n; i++) {//Enter array value
        scanf("%d", &arr[i]);
    }

    
    int maxNumber = findMax(arr, n);
    printf("The maximum number in the array is: %d\n", maxNumber);//print max array

    
}

