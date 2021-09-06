// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


const longestPrefix = (strs) => {
    if (strs.length === 1) return strs[0];

    let prefix = '';

    for (let i = 0; i < strs[0].length; i++) {
        const currentChar = strs[0][i];

        if (!strs.slice(1).every(str => str[i] !== currentChar)) break;

        prefix += currentChar;
    }

    return prefix;
}