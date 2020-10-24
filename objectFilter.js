// Construct a function objectFilter that accepts an object as the first parameter and a callback function as the second parameter.
// objectFilter will return a new object. The new object will contain only the properties from the input object such that the property's value is equal
// to the property's key passed into the callback.

const objectFilter = (obj, callback) => {
  const result = {};

  for (let key in obj) {
    result[key] = callback(obj[key]);
  }

  return result;
};

const addTwo = (num) => num + 2;
const subtractOne = (num) => num - 1;
const isEven = (num) => num % 2 === 0;

console.log(objectFilter({ first: 2, second: 4 }, addTwo));
console.log(objectFilter({ 1: 0, 2: 1, 3: 2, 4: 3 }, isEven));
