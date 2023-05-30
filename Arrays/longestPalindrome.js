/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let set = new Set();

  if (s.length === 1) return s.length;

  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (set.has(s.charAt(i))) {
      set.delete(s.charAt(i));
      count++;
    } else {
      set.add(s.charAt(i));
    }
  }

  if (set.size) return count * 2 + 1;
  else return count * 2;
};

console.log(longestPalindrome("bananas"));
console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("abcba"));
