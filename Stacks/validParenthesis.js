/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let arr = s.split("");

  if (s.length < 2 || arr[0] === "]" || arr[0] === "}" || arr[0] === ")")
    return false;

  for (let i = 0; i < arr.length; i++) {
    let c = arr[i];
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else {
      const lastChar = stack[stack.length - 1];
      if (
        (c === ")" && lastChar !== "(") ||
        (c === "}" && lastChar !== "{") ||
        (c === "]" && lastChar !== "[")
      ) {
        return false;
      }
      stack.pop();
    }
  }

  if (stack.length) return false;

  return true;
};

console.log(isValid("{[]}"));
console.log(isValid("(){}[]"));
console.log(isValid("(("));
console.log(isValid("()"));
console.log(isValid("(]"));
console.log(isValid("{[][}"));
