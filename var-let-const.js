//! var is hoisted! Value is logged as Undefined.
//! let and const is hoisted! cannot access value before its intialization


function myFunction() {
  console.log(result);
  // console.log(resultString);
  // console.log(resultString2);
  if (true) {
    console.log('YES');
  }
  var result = 54;
  let resultString = 'Your reseult is 54';
  const resultString2 = 'Your reseult is 54';
  // resultString2 = 'Your revised reseult is 64';

}

myFunction();

let sum = 70
console.log(sum);

let newresult = 50;
console.log(newresult);
console.log(newresult + 25);
newresult = 75;
console.log(newresult);

const PI = 3.14 //! cannot change const after assignment

const people = {
  name: 'Zico',
  age: 26
}

console.log(people);

// people = {
//   name: 'Jhon'
// }

people.name = 'Zico Sinha';
console.log(people);