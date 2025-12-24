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
