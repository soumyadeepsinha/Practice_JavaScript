async function arraySort(array) {
  return new Promise((resolve) => {
    const sorted = [];
    array.forEach((number) => {
      setTimeout(() => {
        sorted.push(number);
        if (sorted.length === array.length) {
          resolve(sorted);
        }
      }, number * 100);
    })
  })
}

arraySort([20, 10, 50, 30, 40])
  .then(console.table);