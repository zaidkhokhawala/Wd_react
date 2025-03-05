<<<<<<< HEAD
#include <stdio.h>

void conc() {
    char a[10]; // Increased size to avoid overflow
    char b[5];
    printf("Enter string 1: ");
    gets(a);
    printf("Enter string 2: ");
    gets(b);
    
    int i, j;
    // Find the end of the first string
    for(i = 0; a[i] != '\0'; i++);
    // Append the second string
    for(j = 0; b[j] != '\0'; j++, i++) {
        a[i] = b[j];
    }
    a[i] = '\0'; // Null-terminate the merged string
    
    printf("Merged string: %s\n", a);
}

int main() {
    conc();
    return 0;
}

=======
#include <stdio.h>

void conc() {
    char a[10]; // Increased size to avoid overflow
    char b[5];
    printf("Enter string 1: ");
    gets(a);
    printf("Enter string 2: ");
    gets(b);
    
    int i, j;
    // Find the end of the first string
    for(i = 0; a[i] != '\0'; i++);
    // Append the second string
    for(j = 0; b[j] != '\0'; j++, i++) {
        a[i] = b[j];
    }
    a[i] = '\0'; // Null-terminate the merged string
    
    printf("Merged string: %s\n", a);
}

int main() {
    conc();
    return 0;
}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
