// ! Object.assign

let person = { fname: 'Jhon' };

// console.log(person);

const favNumber = [0, 09, 10, 11];

let newPersonProps = {
  fname: 'Ron',
  // fname: person.fname,
  lname: 'Zico',
  favColor: 'Black',
  favNumber,
  empId: 'SS33078544'
}

// let name = { person.fname + newPersonProps.lname
// }

// console.log(name);

Object.assign(person, newPersonProps);

console.log(person);