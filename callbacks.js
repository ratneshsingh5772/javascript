// Callback function example
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(data);
    }, 10000);
}
function displayData(data) {
    console.log("Fetched Data:", data);
}
// Using the callback function
fetchData(displayData);

// Another example of callback functions
function processNumbers(numbers, callback) {
    const results = numbers.map(num => callback(num));
    return results;
}

function square(num) {
    return num * num;
}

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = processNumbers(numbers, square);
console.log("Squared Numbers:", squaredNumbers);

// Using an anonymous function as a callback
const doubledNumbers = processNumbers(numbers, function(num) {
    return num * 2;
});
console.log("Doubled Numbers:", doubledNumbers);

// Using an arrow function as a callback
const tripledNumbers = processNumbers(numbers, num => num * 3);
console.log("Tripled Numbers:", tripledNumbers);

// Example of asynchronous callback using setTimeout
console.log("Start");

setTimeout(() => {
    console.log("This is a delayed message");
}, 2000);

console.log("End");

// Example of event listener as a callback (commented out for Node.js environment)
// document.getElementById("myButton").addEventListener("click", function() {
//     alert("Button was clicked!");
// });

// In the above examples, callback functions are used to handle asynchronous operations, process data, and respond to events in JavaScript.
// Event queue and loop example
console.log("Script start");
// Simulating asynchronous operations with setTimeout and Promises
setTimeout(() => {
    console.log("Timeout callback");
}, 0);
// Using Promise to demonstrate microtask queue
Promise.resolve().then(() => {
    console.log("Promise callback");
});
// Synchronous log
console.log("Script end");

// Expected output order:
// Script start
// Script end
// Promise callback
// Timeout callback

// This demonstrates how the event loop processes the call stack, microtask queue (Promises), and macrotask queue (setTimeout) in JavaScript.

// Demonstrating callback with array methods
const fruits = ["apple", "banana", "cherry", "date"];
// Using map, filter, and reduce with callback functions
const uppercasedFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});

console.log("Uppercased Fruits:", uppercasedFruits);
// Filtering fruits that start with 'b'
const filteredFruits = fruits.filter(function(fruit) {
    return fruit.startsWith("b");
});

console.log("Filtered Fruits (start with 'b'):", filteredFruits);
// Reducing to get the total length of all fruit names
const totalLength = fruits.reduce(function(accumulator, fruit) {
    return accumulator + fruit.length;
}, 0);

console.log("Total Length of Fruit Names:", totalLength);

// In the above examples, callback functions are used with array methods like map, filter, and reduce to process and transform data in JavaScript.   