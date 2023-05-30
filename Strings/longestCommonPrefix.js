// const words = ["flower", "flow", "flight", "flare", "flour", "fleet", "flex"];
const words = [
  "turn",
  //   "dog",
  "tunnel",
  //   "cat",
  //   "book",
  "turp",
  "turtle",
  "tunned",
];
// const words2 = ["flower", "flaw", "flight", "flare", "flour", "fleet", "flex"];

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  strs.sort();

  let l = 0;
  let r = strs.length - 1;
  let idx = 0;

  while (idx < strs[r].length && idx < strs[l].length) {
    if (strs[r][idx] === strs[l][idx]) {
      idx++;
    } else {
      break;
    }
  }

  return strs[0].substring(0, idx);
};

// console.log(words);
// console.log(words2);
console.log(longestCommonPrefix(words));
// console.log(longestCommonPrefix(words2));
