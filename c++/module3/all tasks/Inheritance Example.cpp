<<<<<<< HEAD
#include <iostream>
#include <string>
using namespace std;

// Base class
class Person {
protected:
    string name;
    int age;

public:
    // Constructor for Person class
    Person(string n, int a) : name(n), age(a) {}

    // Function to display person details
    void displayPersonInfo() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
    }
};

// Derived class Student
class Student : public Person {
private:
    string schoolName;

public:
    // Constructor for Student class
    Student(string n, int a, string school) : Person(n, a), schoolName(school) {}

    // Function to display student details
    void displayStudentInfo() {
        displayPersonInfo();
        cout << "School: " << schoolName << endl;
    }
};

// Derived class Teacher
class Teacher : public Person {
private:
    string subject;

public:
    // Constructor for Teacher class
    Teacher(string n, int a, string sub) : Person(n, a), subject(sub) {}

    // Function to display teacher details
    void displayTeacherInfo() {
        displayPersonInfo();
        cout << "Subject: " << subject << endl;
    }
};

 main() {
    // Create Student and Teacher objects
    Student student("John Doe", 20, "XYZ High School");
    Teacher teacher("Dr. Smith", 40, "Mathematics");

    // Display details of student and teacher
    cout << "Student Information: " << endl;
    student.displayStudentInfo();
    cout << endl;

    cout << "Teacher Information: " << endl;
    teacher.displayTeacherInfo();

}

=======
#include <iostream>
#include <string>
using namespace std;

// Base class
class Person {
protected:
    string name;
    int age;

public:
    // Constructor for Person class
    Person(string n, int a) : name(n), age(a) {}

    // Function to display person details
    void displayPersonInfo() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
    }
};

// Derived class Student
class Student : public Person {
private:
    string schoolName;

public:
    // Constructor for Student class
    Student(string n, int a, string school) : Person(n, a), schoolName(school) {}

    // Function to display student details
    void displayStudentInfo() {
        displayPersonInfo();
        cout << "School: " << schoolName << endl;
    }
};

// Derived class Teacher
class Teacher : public Person {
private:
    string subject;

public:
    // Constructor for Teacher class
    Teacher(string n, int a, string sub) : Person(n, a), subject(sub) {}

    // Function to display teacher details
    void displayTeacherInfo() {
        displayPersonInfo();
        cout << "Subject: " << subject << endl;
    }
};

 main() {
    // Create Student and Teacher objects
    Student student("John Doe", 20, "XYZ High School");
    Teacher teacher("Dr. Smith", 40, "Mathematics");

    // Display details of student and teacher
    cout << "Student Information: " << endl;
    student.displayStudentInfo();
    cout << endl;

    cout << "Teacher Information: " << endl;
    teacher.displayTeacherInfo();

}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
