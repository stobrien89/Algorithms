// Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs.
//BONUS: Use reduce!

const intersection = (...arrays) => {
  const argsArr = [].concat(...arrays);

  return argsArr.reduce(
    (a, b) => (arrays.every((array) => array.includes(b)) ? [...a, b] : [...a]),
    []
  );
};

console.log(intersection([1, 2], [1, 4], [1, 5]));

console.log(
  intersection(
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
  )
);

console.log(intersection([999, 888, 777, 666], [999, 888, 777, 666]));
