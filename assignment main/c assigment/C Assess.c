<<<<<<< HEAD
#include <stdio.h>
#include <string.h>

// Function to reverse a string
rev_str(char *str) {
	int i,len ;
    len = strlen(str);
    printf("Reversed string: ");
    for (i =len-1; i>=0; i--) {
        printf("%c", str[i]);
    }
    printf("\n");
}

// Function to concatenate two strings
concat_str(char *str1, char *str2, char *result) {
    strcpy(result, str1);
    strcat(result, str2);
}

// Function to check if a string is a palindrome
is_palindrome(char *str) {
	int i;
	int len = strlen(str);
    for (i = 0; i < len / 2; i++) {
        if (str[i] != str[len-i-1])
            return 0; // Not a palindrome
    }
    return 1; // Is a palindrome
}

// Function to copy a string
copy_str(char *dest, char *src) {
    strcpy(dest, src);
}

// Function to find the length of a string
len_str(char *str) {
    strlen(str);
}

// Function to find the frequency of a character in a string
freq_char(char *str, char ch) {
    int count = 0,i;
    for (i = 0; str[i] != '\0'; i++) {
        if (str[i] == ch) {
            count++;
        }
    }
    return count;
}

// Function to find the number of vowels and consonants
vow_conso(char *str, int *v_count, int *c_count) {
	int i;
    *v_count = 0;
    *c_count = 0;
    
    for (i = 0; str[i] != '\0'; i++) {
        if (str[i] >= 'a' && str[i] <= 'z' || str[i] >= 'A' && str[i] <= 'Z') {
            if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' ||
                str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U') {
                (*v_count)++;
            } else {
                (*c_count)++;
            }
        }
    }
}

// Function to find the number of blank spaces and digits
blan_dig(char *str, int *b_count, int *d_count) {
	int i;
    *b_count = 0;
    *d_count = 0;
    for (i = 0; str[i] != '\0'; i++) {
        if (str[i] == ' ') {
            (*b_count)++;
        } else if (str[i] >= '0' && str[i] <= '9') {
            (*d_count)++;
        }
    }
}

int main() {
    char str[100], str1[100], str2[100], result[200];
    int choice, length, frequency, v_count, c_count, b_count, d_count;
    char ch;

    while (1) {
        printf("String Operations:\n");
        printf("1. Reverse a string\n");
        printf("2. Concatenate two strings\n");
        printf("3. Check if a string is a palindrome\n");
        printf("4. Copy a string\n");
        printf("5. Find the length of a string\n");
        printf("6. Find the frequency of a character in a string\n");
        printf("7. Count vowels and consonants\n");
        printf("8. Count blank spaces and digits\n");
        printf("9. Exit\n");

        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter a string: ");
                scanf("%s", str);
                rev_str(str);
                printf("Reversed string: %s\n", str);
                break;
            case 2:
                printf("Enter the first string: ");
                scanf("%s", str1);
                printf("Enter the second string: ");
                scanf("%s", str2);
                concat_str(str1, str2, result);
                printf("Concatenated string: %s\n", result);
                break;
            case 3:
                printf("Enter a string: ");
                scanf("%s", str);
                if (is_palindrome(str)) {
                    printf("The string is a palindrome.\n");
                } else {
                    printf("The string is not a palindrome.\n");
                }
                break;
            case 4:
                printf("Enter a string: ");
                scanf("%s", str);
                copy_str(str1, str);
                printf("Copied string: %s\n", str1);
                break;
            case 5:
                printf("Enter a string: ");
                scanf("%s", str);
                length = len_str(str);
                printf("Length of the string: %d\n", length);
                break;
            case 6:
                printf("Enter a string: ");
                scanf("%s", str);
                printf("Enter a character: ");
                scanf(" %c", &ch);
                frequency = freq_char(str, ch);
                printf("Frequency of %c in the string: %d\n", ch, frequency);
                break;
            case 7:
                printf("Enter a string: ");
                scanf("%s", str);
               	vow_conso(str, &v_count, &c_count);
                printf("Vowels: %d\n", v_count);
                printf("Consonants: %d\n", c_count);
                break;
            case 8:
                printf("Enter a string: ");
                scanf("%s", str);
                blan_dig(str, &b_count, &d_count);
                printf("Blank spaces: %d\n", b_count);
                printf("Digits: %d\n", d_count);
                break;
            case 9:
                printf("Exiting...\n");
                return 0;
            default:
                printf("Invalid choice. Please try again.\n");
                break;
        }

        printf("Do you want to continue? (y/n): ");
        if (getchar() != 'y') {
            break;
        }
    }
}
=======
#include <stdio.h>
#include <string.h>

// Function to reverse a string
rev_str(char *str) {
	int i,len ;
    len = strlen(str);
    printf("Reversed string: ");
    for (i =len-1; i>=0; i--) {
        printf("%c", str[i]);
    }
    printf("\n");
}

// Function to concatenate two strings
concat_str(char *str1, char *str2, char *result) {
    strcpy(result, str1);
    strcat(result, str2);
}

// Function to check if a string is a palindrome
is_palindrome(char *str) {
	int i;
	int len = strlen(str);
    for (i = 0; i < len / 2; i++) {
        if (str[i] != str[len-i-1])
            return 0; // Not a palindrome
    }
    return 1; // Is a palindrome
}

// Function to copy a string
copy_str(char *dest, char *src) {
    strcpy(dest, src);
}

// Function to find the length of a string
len_str(char *str) {
    strlen(str);
}

// Function to find the frequency of a character in a string
freq_char(char *str, char ch) {
    int count = 0,i;
    for (i = 0; str[i] != '\0'; i++) {
        if (str[i] == ch) {
            count++;
        }
    }
    return count;
}

// Function to find the number of vowels and consonants
vow_conso(char *str, int *v_count, int *c_count) {
	int i;
    *v_count = 0;
    *c_count = 0;
    
    for (i = 0; str[i] != '\0'; i++) {
        if (str[i] >= 'a' && str[i] <= 'z' || str[i] >= 'A' && str[i] <= 'Z') {
            if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' ||
                str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U') {
                (*v_count)++;
            } else {
                (*c_count)++;
            }
        }
    }
}

// Function to find the number of blank spaces and digits
blan_dig(char *str, int *b_count, int *d_count) {
	int i;
    *b_count = 0;
    *d_count = 0;
    for (i = 0; str[i] != '\0'; i++) {
        if (str[i] == ' ') {
            (*b_count)++;
        } else if (str[i] >= '0' && str[i] <= '9') {
            (*d_count)++;
        }
    }
}

int main() {
    char str[100], str1[100], str2[100], result[200];
    int choice, length, frequency, v_count, c_count, b_count, d_count;
    char ch;

    while (1) {
        printf("String Operations:\n");
        printf("1. Reverse a string\n");
        printf("2. Concatenate two strings\n");
        printf("3. Check if a string is a palindrome\n");
        printf("4. Copy a string\n");
        printf("5. Find the length of a string\n");
        printf("6. Find the frequency of a character in a string\n");
        printf("7. Count vowels and consonants\n");
        printf("8. Count blank spaces and digits\n");
        printf("9. Exit\n");

        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter a string: ");
                scanf("%s", str);
                rev_str(str);
                printf("Reversed string: %s\n", str);
                break;
            case 2:
                printf("Enter the first string: ");
                scanf("%s", str1);
                printf("Enter the second string: ");
                scanf("%s", str2);
                concat_str(str1, str2, result);
                printf("Concatenated string: %s\n", result);
                break;
            case 3:
                printf("Enter a string: ");
                scanf("%s", str);
                if (is_palindrome(str)) {
                    printf("The string is a palindrome.\n");
                } else {
                    printf("The string is not a palindrome.\n");
                }
                break;
            case 4:
                printf("Enter a string: ");
                scanf("%s", str);
                copy_str(str1, str);
                printf("Copied string: %s\n", str1);
                break;
            case 5:
                printf("Enter a string: ");
                scanf("%s", str);
                length = len_str(str);
                printf("Length of the string: %d\n", length);
                break;
            case 6:
                printf("Enter a string: ");
                scanf("%s", str);
                printf("Enter a character: ");
                scanf(" %c", &ch);
                frequency = freq_char(str, ch);
                printf("Frequency of %c in the string: %d\n", ch, frequency);
                break;
            case 7:
                printf("Enter a string: ");
                scanf("%s", str);
               	vow_conso(str, &v_count, &c_count);
                printf("Vowels: %d\n", v_count);
                printf("Consonants: %d\n", c_count);
                break;
            case 8:
                printf("Enter a string: ");
                scanf("%s", str);
                blan_dig(str, &b_count, &d_count);
                printf("Blank spaces: %d\n", b_count);
                printf("Digits: %d\n", d_count);
                break;
            case 9:
                printf("Exiting...\n");
                return 0;
            default:
                printf("Invalid choice. Please try again.\n");
                break;
        }

        printf("Do you want to continue? (y/n): ");
        if (getchar() != 'y') {
            break;
        }
    }
}
>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
