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