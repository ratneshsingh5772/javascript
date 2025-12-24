// lexical scope in JavaScript
// Functions can access variables from their own scope and from the scope of their parent functions

// Example of a function accessing variables from its lexical scope
function greet(name) {
    let greeting = "Hello";
    
    function displayGreeting() {
        console.log(greeting + ", " + name + "!");
    }
    
    displayGreeting();
}

greet("Ratnesh"); // Output: Hello, Ratnesh!
let sum = function (a,b){
    return a + b;
}

let difference = function (a,b){
    return a - b;
}
// Higher-order function that takes another function as an argument
let calculator = function (num1, num2, operation){
    return operation (num1, num2);
}

console.log(calculator(10,5,sum)); // 15
console.log(calculator(10,5,difference)); // 5

// Demonstrating lexical scope with nested functions
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
}

const newFunction = outerFunction('outside'); // returns innerFunction
newFunction('inside'); // logs: Outer Variable: outside, Inner Variable: inside

// In the above example, innerFunction has access to the variable outerVariable defined in its outer scope (outerFunction), demonstrating lexical scoping in JavaScript.
// Another example to illustrate lexical scope
let c = 20;

function outer(){
    c = 30;
    function inner(){
        c = 40;
        console.log(c); // 40
    }
    inner();
    console.log(c); // 40   
}
