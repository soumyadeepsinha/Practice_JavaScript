/*
When we use the function keyword at first that's a Defination
When we use a variable keyword in function or putting function in varibale that's a Declaration
*/

// function defination
function add(a, b) {
  return a + b;
}

// function declaration
// function expression
var sum = function (a, b) {
  return a + b;
}

// arrow function
let submission = (a, b) => {
  return a + b;
}

console.log(submission(8, 8));

console.log(sum(45, 5));