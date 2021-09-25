// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
// Example 4:

// Input: nums = [1,3,5,6], target = 0
// Output: 0
// Example 5:

// Input: nums = [1], target = 0
// Output: 0

const searchInsertPosition = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    let mid; 

    while (start <= end) {
        mid = Math.floor((start + mid) / 2);

        if (target === nums [mid]) return mid;

        if (target > nums[mid]) start = mid + 1;

        if (target < nums[mid]) end = mid - 1;
    }

    return start;
}
