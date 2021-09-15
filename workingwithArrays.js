function indexing(array, value) {
  for (let i = 0; i <= array.length; i += 1) {
    if (array[i] === value) {
      return i;
    }
    return -1;
  }
}

const peopleName = ['Zico', 'Peter', 'Navy'];
const peopleAge = [50, 40, 22, 46, 62];

console.log(indexing([42], 42));
console.log(indexing(peopleName, 'Zico'));
console.log(indexing(peopleAge, 50));
console.log(indexing(peopleName, 'Navy'));
console.log(indexing(peopleName, 50));
console.log(peopleName.indexOf('Peter'));
