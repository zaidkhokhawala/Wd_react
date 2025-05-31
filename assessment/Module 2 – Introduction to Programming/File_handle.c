#include <stdio.h>

int main() {
    FILE *file;
    char str[] = "Hello, this is a test string written to file.";
    char buffer[100];

    // Open file in write mode
    file = fopen("example.txt", "w");
    if (file == NULL) {
        printf("Error opening file for writing.\n");
        return 1;
    }

    // Write string to file
    fprintf(file, "%s", str);
    fclose(file);  // Close file after writing

    // Open file in read mode
    file = fopen("example.txt", "r");
    if (file == NULL) {
        printf("Error opening file for reading.\n");
        return 1;
    }

    // Read contents from file and display
    printf("File content:\n");
    while (fgets(buffer, sizeof(buffer), file) != NULL) {
        printf("%s", buffer);
    }

    fclose(file);  // Close file after reading

    return 0;
}
