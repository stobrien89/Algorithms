//Write a function called minSubArrayLen which accepts two arguments:
//an array of positive integers and a positive integer. The function should return the
//minimal length of a contiguous subarray of which the sum is greater than or equal to the function.
//if there isn't one, return 0 instead.

const minSubArrayLen = (arr, num) => {
  let start = 0;
  let end = 0;
  let minLen = Infinity;
  let sum = 0;

  while (start < arr.length) {
    if (sum < num && end < arr.length) {
      sum += arr[end];
      end++;
    } else if (sum >= num) {
      minLen = Math.min(minLen, end - start);
      sum -= arr[start];
      start++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); //2 -> because [4, 3] is the smallest subarray.
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); //2 -> because [5,4] is the smallest subarray.
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
