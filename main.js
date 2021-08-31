// Object.assign


const person = { fname: 'Jhon', favNumber: 07 };

// console.log(person);

const newPersonProps = {
  // fname: person.fname,
  lname: 'Zico',
  favColor: 'Black',
  empId: 'SS33078544'
}


Object.assign(person, newPersonProps);

console.log(person);