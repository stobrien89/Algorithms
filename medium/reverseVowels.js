// your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

// reverseVowels("Hello!"); // "Holle!"
// reverseVowels("Tomatoes"); // "Temotaos"
// reverseVowels("Reverse Vowels In A String") // "RivArsI Vewols en e Streng"

//Solution 1
const reverseVowels = ([...str]) => {
  const vowels = "aeiouAEIOU";

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (vowels.includes(str[left]) && vowels.includes(str[right])) {
      [str[left], str[right]] = [str[right], str[left]];
      left++;
      right--;
    } else if (!vowels.includes(str[left])) {
      left++;
    } else if (!vowels.includes(str[right])) {
      right--;
    } else {
      left++;
      right--;
    }
  }

  return str.join("");
};

//Solution 2
const reverseVowels1 = (str) => {
  let vowels = str.replace(/[^aeiou]/gi, "").split("");

  return str.replace(/[aeiou]/gi, (_) => vowels.pop());
};

console.log(reverseVowels("Reverse Vowels In A String"));
console.log(reverseVowels1("Reverse Vowels In A String"));
console.log(reverseVowels("Hello!"));
console.log(reverseVowels1("Hello!"));
console.log(reverseVowels("Tomatoes"));
console.log(reverseVowels1("Tomatoes"));

// Test.assertEquals(reverseVowels("Hello!"), "Holle!", "Expected 'Holle!', got " + reverseVowels("Hello!"));
// Test.assertEquals(reverseVowels("Tomatoes"), "Temotaos", "Expected 'Temotaos', got " + reverseVowels("Tomatoes"));
// Test.assertEquals(reverseVowels("Reverse Vowels In A String"), "RivArsI Vewols en e Streng", "Expected 'RivArsI Vewols en e Streng', got " + reverseVowels("Reverse Vowels In A String"));
