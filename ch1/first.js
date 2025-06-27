// Variable declarations
fname = "Kanishka Bisht";  // Declaring a variable without var/let/const (not recommended)
age = 24;                  // Same as above

// Difference between null and undefined
x = null;       // 'x' is explicitly set to null → known to be "nothing"
y = undefined;  // 'y' is undefined → value is not assigned (unknown)

// Output values to console
console.log(y);        // Prints: undefined
console.log(x);        // Prints: null
console.log(age);      // Prints: 24
console.log(fname);    // Prints: Kanishka Bisht

// JavaScript is a dynamically typed language
// → You don't need to declare variable types explicitly

// Block scope with 'let'
{
    let a = 5;          // 'a' exists only inside this block
    console.log(a);     // Prints: 5
}

// Defining a constant object
const student = {
    fullName: "Kanishka Bisht",
    age: 20,
    cgpa: 7.58,
    isPass: true
};

// Modifying a property of the constant object
student["age"] = student["age"] + 1;   // Increases age from 20 to 21

// Accessing object properties
console.log(student["fullName"]);      // Prints: Kanishka Bisht
console.log(student.age);              // Prints: 21
