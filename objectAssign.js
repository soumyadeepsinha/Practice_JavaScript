// function assign(target, source) {
//   return Object.entries(source).reduce((result, [key, value]) => {
//     result[key] = value;
//     return result;
//   }, target);
// }


function assign(target, source) {
  Object.entries(source).forEach(([key, value]) => {
    target[key] = value;
    return target;
  });
}



let person = { spouseName: 'Lisa Roots' };

// console.log(person);

const favNumber = [0, 09, 10, 11];

let newPersonProps = {
  // fname: person.fname,
  lname: 'De Suza',
  favColor: 'Black',
  favNumber,
  empId: 'SS33078544'
}

assign(person, newPersonProps);

console.log(person);
