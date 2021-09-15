function indexing(array, value) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      return i;
    }
    return -1;
  }
}

const peopleName = ['Zico', 'Jhon', 'Peter', 'Sandy'];

console.log(indexing([42], 42));
console.log(indexing(peopleName, 'Zico'));
console.log(indexing(peopleName, 'Sandy'));
console.log(indexing(peopleName, 'Jhon'));
console.log(indexing(peopleName, 50));
console.log(peopleName.indexOf('Peter'));
