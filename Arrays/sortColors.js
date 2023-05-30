/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function (nums) {
//   console.log(nums);
//   let currentIndex = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[currentIndex] == 1) {
//       currentIndex++;
//     } else if (nums[currentIndex] == 2) {
//       nums.splice(currentIndex, 1);
//       nums.push(2);
//     } else if (nums[currentIndex] == 0) {
//       nums.splice(currentIndex, 1);
//       nums.unshift(0);
//       currentIndex++;
//     }
//     console.log(nums);
//   }
// };

var sortColors = function (nums) {
  let low = 0; // Pointer for 0s
  let high = nums.length - 1; // Pointer for 2s
  let i = 0; // Current index

  while (i <= high) {
    if (nums[i] === 0) {
      // Swap current element with the low pointer element
      [nums[i], nums[low]] = [nums[low], nums[i]];
      low++;
      i++;
    } else if (nums[i] === 2) {
      // Swap current element with the high pointer element
      [nums[i], nums[high]] = [nums[high], nums[i]];
      high--;
    } else {
      i++;
    }
  }
  console.log(nums);
};

// sortColors([2, 0, 2, 1, 1, 0]);
sortColors([2, 0, 1]);
