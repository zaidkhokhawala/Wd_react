# Module 2 - Introduction to Programming (C Language)

## 1. Overview of C Programming

**Q1: What is the history and evolution of C programming? Why is it still important today?**  
**Answer:**  
C programming was developed by **Dennis Ritchie** in **1972** at **Bell Labs**. It was created as an improvement of the B language and was designed to develop the UNIX operating system.  
Over the years, C became popular because of its **simplicity**, **speed**, and **powerful low-level access**. It influenced many modern languages like C++, Java, and Python.  
Today, C is still important because:

- It is **fast and efficient**.
- Used in **system programming** (OS, drivers).
- Ideal for **embedded systems and microcontrollers**.
- It provides **strong control over memory**.

---

## 2. Setting Up Environment

**Q2: What are the steps to install a C compiler and set up an IDE like DevC++, VS Code, or CodeBlocks?**  
**Answer:**  
To set up a C programming environment, follow these steps:

1. **Install a C Compiler (GCC)**:

   - For Windows: Install [MinGW](https://sourceforge.net/projects/mingw/).
   - For Linux/Mac: GCC is usually pre-installed or can be installed using terminal.

2. **Choose and Install an IDE**:

   - **DevC++**: Simple and beginner-friendly IDE.
   - **CodeBlocks**: Free, open-source IDE.
   - **VS Code**: Lightweight editor; needs extensions for C.

3. **Configure the IDE**:

   - Set the compiler path in IDE settings (e.g., point DevC++ or CodeBlocks to MinGW).
   - For VS Code, install the **C/C++ extension** by Microsoft and set up `tasks.json` and `launch.json`.

4. **Write and Run a Simple Program**:
   - Create a new `.c` file and write a "Hello, World!" program.
   - Compile and run it to test the setup.

---

## 3. Basic Structure of a C Program

**Q3: What is the basic structure of a C program? Explain headers, main function, comments, data types, and variables.**  
**Answer:**  
A basic C program structure looks like this:

```c
#include <stdio.h>  // Header file

int main() {        // Main function
    // This is a comment
    int age = 20;    // Variable (int)
    float pi = 3.14; // Variable (float)
    char grade = 'A';// Variable (char)
    printf("Age = %d", age);  // Output
    return 0;
}
Header files: Begin with #include to import functions (e.g., #include <stdio.h> for input/output).

Main function: main() is the entry point of every C program.

Comments: Used to explain code. Single-line: // comment, Multi-line: /* comment */

Data Types: Define type of data. Common types: int, float, char, double.

Variables: Named containers to store values (e.g., int x = 10;).

4. Operators in C
Q4: What are the different types of operators in C?
Answer:
C has several types of operators:

Arithmetic Operators: +, -, *, /, %

Relational Operators: ==, !=, >, <, >=, <=

Logical Operators: &&, ||, !

Assignment Operators: =, +=, -=, *=, /=, %=

Increment/Decrement Operators: ++, --

Bitwise Operators: &, |, ^, ~, <<, >>

Conditional (Ternary) Operator: condition ? true : false

5. Control Flow Statements in C
Q5: What are the different decision-making statements in C?
Answer:
C uses the following decision-making statements:

if statement: Executes code if condition is true.

if-else statement: Executes one block if true, another if false.

nested if-else: if-else inside another if-else.

switch statement: Used to select one block from many options.

6. Looping in C
Q6: Compare while, for, and do-while loops in C.
Answer:

Loop Type	Checks Condition	Runs At Least Once?	Use Case
while	Before loop	No	When condition is checked first
for	Before loop	No	When number of iterations known
do-while	After loop	Yes	When loop body must run once

7. Loop Control Statements
Q7: What are break, continue, and goto statements in C?
Answer:

break: Exit the current loop or switch immediately.

continue: Skip current iteration and move to next.

goto: Jump to a labeled part of code.

8. Functions in C
Q8: What are functions in C? How are they declared, defined, and called?
Answer:
Functions are blocks of reusable code.

Declaration: e.g. int add(int a, int b);

Definition: Function body with code.

Call: Using function name with arguments, e.g., add(2,3);

9. Arrays in C
Q9: What is an array in C? Difference between one-dimensional and multi-dimensional arrays?
Answer:

Array: Collection of elements of same type.

One-dimensional: Simple list.

Multi-dimensional: Matrix or table.

10. Pointers in C
Q10: What are pointers in C? How are they declared and initialized? Why are they important?
Answer:
Pointers store address of variables.

Declare: int *ptr;

Initialize: ptr = &x;

Dereference: *ptr

Important for dynamic memory, arrays, and function arguments.

11. Strings in C
Q11: What are string handling functions like strlen(), strcpy(), strcat(), strcmp(), and strchr()?
Answer:

strlen(s): length of string

strcpy(dest, src): copy string

strcat(s1, s2): concatenate

strcmp(s1, s2): compare

strchr(s, c): find char

12. Structures in C
Q12: What is a structure in C? How to declare, initialize, and access structure members?
Answer:
Structure groups different data types.

code :
struct Student {
    char name[50];
    int roll;
    float marks;
};
struct Student s1 = {"Zaid", 101, 92.5};
printf("%s", s1.name);
13. File Handling in C
Q13: Why is file handling important in C? How to perform file operations?
Answer:
File handling lets programs save and read permanent data.

Open: fopen()

Close: fclose()

Write: fprintf()

Read: fscanf()

Example:

code :
FILE *fp = fopen("data.txt", "w");
fprintf(fp, "Hello File");
fclose(fp);
```
