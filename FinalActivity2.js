// 1. Demonstration of comments in JavaScript

// This is a single-line comment

/*
 This is a multiline comment.
 You can write multiple lines here.
*/

// 2. Variable declarations
let age = 20; // using let because its value may change later
const legalAge = 18; // constant value that should not be changed
// We avoid using var because it has function scope and can cause accidental bugs due to hoisting.

// 3. If-else comparison
if (age >= legalAge) {
    console.log("You are of legal age.");
} else {
    console.log("You are not yet of legal age.");
}

// 4. Switch statement demonstration
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Unknown day");
}

// 5. Loop demonstrations

// For loop
for (let i = 1; i <= 5; i++) {
    console.log("For loop iteration:", i);
}

// While loop
let counter = 1;
while (counter <= 5) {
    console.log("While loop iteration:", counter);
    counter++;
}

// Do-while loop
let count = 1;
do {
    console.log("Do-while iteration:", count);
    count++;
} while (count <= 5);

// 6. Regular function demonstration
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Mon"));

// 7. Arrow function demonstration
const addNumbers = (a, b) => {
    return a + b;
};

console.log("Sum:", addNumbers(5, 7));
