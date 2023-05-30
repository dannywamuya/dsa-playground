/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let res = 0;
  for (let num of nums) {
    if (!set.has(num - 1)) {
      let length = 0;
      while (set.has(num++)) {
        console.log(num);
        length += 1;
      }
      res = Math.max(length, res);
    }
  }

  return res;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
// console.log(longestConsecutive([0, -1])); // 2
// console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6])); //7
// console.log(longestConsecutive([1, 2, 0, 1])); //3
