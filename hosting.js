var add;

// function will be hosted on the top of the scope on runtime
console.log(add(5, 5)); //! add is not a function yet

add = function (a, b) {
  return a + b;
}

console.log(add(5, 5));

console.log(sum);

let sum = function (a, b) {
  return a + b;
}