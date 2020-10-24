// Construct a function objectFilter that accepts an object as the first parameter and a callback function as the second parameter.
// objectFilter will return a new object. The new object will contain only the properties from the input object such that the property's value is equal
// to the property's key passed into the callback.

const objectFilter = (obj, callback) => {
  const result = {};

  for (let [key, value] of Object.entries(obj)) {
    result[key] = callback(value);
  }

  return result;
};
