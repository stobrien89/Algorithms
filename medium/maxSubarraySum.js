//Given an array of integers and a number, write a function called maxSubarraySum,
//which finds the maximum of a (contiguous) subarray with the length of the number passed to the function

const maxSubarraySum = (array, n) => {
  if (array.length < n) return null;

  let max = 0,
    temp = 0;

  for (let i = 0; i < n; i++) {
    max += array[i];
  }
  temp = max;

  for (let i = n; i < array.length; i++) {
    temp = temp - array[i - n] + array[i];
    max = Math.max(max, temp);
  }
  return max;
};

console.log(maxSubarraySum([100, 200, 300, 400], 2)); //700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); //39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); //5
console.log(maxSubarraySum([2, 3], 3)); //null
