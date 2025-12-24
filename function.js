// Example of function hoisting in JavaScript
// Exicution Context Creation Phase
// Memory allocation for function declarations happens here
// Code Execution Phase

console.log("Function hoisting works!"+ createCourse("JavaScript Basics"));
function createCourse(courseName){
    console.log("Creating course: " + courseName);
}
// The above function call works because of hoisting
console.log("Course created: " + createCourse("JavaScript Basics"));


// Hoisting

console.log(a) // undefined
console.log(this.a)
var a = 10;
console.log(a) // 10

// In the above example, the declaration of 'a' is hoisted to the top, but its assignment happens later. 
// Hence, the first console.log outputs 'undefined'.

// Function expressions are not hoisted
// console.log(add(5, 3)); // This would throw an error: TypeError: add is not a function
var add = function(x, y) {
    return x + y;
};
console.log(add(5, 3)); // 8

// In the above example, the variable 'add' is hoisted, but it is undefined at the time of the first call. 
// Therefore, trying to invoke it before its assignment results in an error.        
// Example of function expression hoisting in JavaScript
// Exicution Context Creation Phase
// Memory allocation for variable declarations happens here
// Code Execution Phase 

// const, let and var hoisting difference
console.log(b); // undefined
var b = 20;
console.log(b); // 20

console.log(c); // ReferenceError: Cannot access 'c' before initialization
let c = 30;
console.log(c); // 30

console.log(d); // ReferenceError: Cannot access 'd' before initialization
const d = 40;
console.log(d); // 40

// In the above example, 'b' is declared with 'var', so it is hoisted and initialized to 'undefined'. 
// However, 'c' and 'd' are declared with 'let' and 'const', respectively, and they are not accessible before their initialization, 
// leading to a ReferenceError if accessed too early.

// temporal dead zone example
function example() {
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 10;
}
example();

// In the above example, trying to access 'x' before its declaration results in a ReferenceError due to the temporal dead zone.

// temporal dead zone with variavles
{
    console.log(y); // ReferenceError: Cannot access 'y' before initialization
    const y = 20;
}

// In the above block, accessing 'y' before its declaration also results in a ReferenceError due to the temporal dead zone. 
// Block-scoped variables declared with 'let' and 'const' are not accessible before their declaration within the block.
// Example of value type behavior in JavaScript
let x = "Ratnesh"
let y = x;

x = "Kumar";
console.log(x); // "Kumar"
console.log(y); // "Ratnesh"

// Example of reference type behavior in JavaScript

let p = { name: "Ratnesh" };
let q = p;

p.name = "Kumar";
console.log(p.name); // "Kumar"
console.log(q.name); // "Kumar"

q.name = "Singh";
console.log(p.name); // "Singh"
console.log(q.name); // "Singh"

// Demonstrating primitive vs reference types
// Value type example
let a = 10;
let b = a;

a = 20;
console.log(a); // 20
console.log(b); // 10

// Reference type example
let obj1 = { value: 10 };
let obj2 = obj1;

obj1.value = 20;
console.log(obj1.value); // 20
console.log(obj2.value); // 20

let lerning = ["JavaScript", "Python", "Java", "C++",true,null,6.5];
console.log(lerning[2]); // "Java"
lerning[3] = "C#";
console.log(lerning); // ["JavaScript", "Python", "Java", "C#", true, null, 6.5]   
// Checking the type of the array and arrays are objects in JavaScript 
console.log(typeof lerning); // "object"    