#include <stdio.h>

// Define a structure to store student details
struct Student {
    char name[50];
    int rollNumber;
    float marks;
};

int main() {
    struct Student students[3];  // Array of 3 students
    int i;

    // Input details of 3 students
    for (i = 0; i < 3; i++) {
        printf("Enter details for student %d:\n", i + 1);
        printf("Name: ");
        scanf(" %[^\n]", students[i].name);  // To read string with spaces
        printf("Roll Number: ");
        scanf("%d", &students[i].rollNumber);
        printf("Marks: ");
        scanf("%f", &students[i].marks);
        printf("\n");
    }

    // Print details of students
    printf("Student Details:\n");
    for (i = 0; i < 3; i++) {
        printf("Student %d:\n", i + 1);
        printf("Name: %s\n", students[i].name);
        printf("Roll Number: %d\n", students[i].rollNumber);
        printf("Marks: %.2f\n", students[i].marks);
        printf("\n");
    }

    return 0;
}
