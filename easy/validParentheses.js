// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

const isValid = ([...str]) => {
  return !str.reduce((a, b) => {
    const lastValue = a.length ? a[a.length - 1] : null;

    if (b === ")" && lastValue === "(") a.pop();
    else if (b === "]" && lastValue === "[") a.pop();
    else if (b === "}" && lastValue === "{") a.pop();
    else a.push(b);

    return a;
  }, []).length;
};

console.log(isValid("("));
console.log(isValid("()[]{}"));
console.log(isValid("()))(("));
console.log(isValid("([)]({})"));
console.log(isValid("[]"));
