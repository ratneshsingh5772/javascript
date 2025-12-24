// function + lexical scope = closure
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

outer();
console.log(c); // 40