/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  s = s.split("");
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "]") {
      stack.push(s[i]);
    } else {
      let str = "";
      while (stack.length && stack[stack.length - 1] !== "[") {
        str = stack.pop() + str;
      }

      stack.pop();

      let count = "";

      while (stack.length && !isNaN(stack[stack.length - 1])) {
        count = stack.pop() + count;
      }

      count = parseInt(count);

      let newStr = str.repeat(count);

      stack.push(newStr);
    }
  }

  return stack.join("");
};

console.log(decodeString("100[leetcode]"));
console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));
console.log(decodeString("2[abc]3[cd]ef"));
