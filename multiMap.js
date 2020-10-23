// Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks.
// multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys
// will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.
const multiMap = (arr, callbacksArr) => {
  const result = {};

  arr.forEach((val) => {
    result[val] = callbacksArr.map((func) => func(val));
  });

  return result;
};

const addTwo = (num) => num + 2;
const subtractOne = (num) => num - 1;
const isEven = (num) => num % 2 === 0;

console.log(multiMap([1, 2, 3, 4, 5, 6], [addTwo, subtractOne, isEven]));
