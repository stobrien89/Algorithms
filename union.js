// Construct a function union that compares input arrays and returns a new array that contains all elements.
// If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first

const union = (...arrays) => [...new Set(arrays.flat())];

const union2 = (...arrays) => [...new Set([].concat(...arrays))];

const union3 = (...arrays) => [
  ...new Set(arrays.reduce((a, b) => a.concat(b))),
];

console.log(union3([1, 2], [1, 4], [1, 5]));
