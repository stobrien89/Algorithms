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


const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const reverseArray = arr => {
  let start = 0;
  let end = arr.length - 1;
  
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}

const addPrev = arr => arr.map((val, index) => index ? val + arr[index - 1] : val);

console.log(addPrev(testArray));



const arrProduct = arr => {
  const product = arr.reduce((a, b) => a * b, 1);

  return arr.map((val) => product - val);
}

const arr = [1,2,3,4,5,6]

console.log(arrProduct(arr))

const arrProduct1 = arr => {
  return arr.map((val, index) => {
    let product = 1;

    for (let j = 0; j < arr.length; j++) {
      if (j !== index) {
        product *= arr[j];
      }
    }
    return product;
  })
}

console.log(arrProduct1(arr));