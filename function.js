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