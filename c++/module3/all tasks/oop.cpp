<<<<<<< HEAD
#include <iostream>
using namespace std;

class Rectangle {
public:
    float length, width;
    
    void setDimensions(float l, float w) {
        length = l;
        width = w;
    }

    float calculateArea() {
        return length * width;
    }
};

 main() {
    Rectangle rect;
    float length, width;
    
    cout << "Enter length and width: ";
    cin >> length >> width;
    
    rect.setDimensions(length, width);
    cout << "Area of rectangle: " << rect.calculateArea() << endl;

}

=======
#include <iostream>
using namespace std;

class Rectangle {
public:
    float length, width;
    
    void setDimensions(float l, float w) {
        length = l;
        width = w;
    }

    float calculateArea() {
        return length * width;
    }
};

 main() {
    Rectangle rect;
    float length, width;
    
    cout << "Enter length and width: ";
    cin >> length >> width;
    
    rect.setDimensions(length, width);
    cout << "Area of rectangle: " << rect.calculateArea() << endl;

}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
