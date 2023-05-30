/**
 * Two Pointers
 *
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let low = 0;
  let high = height.length - 1;
  let max = 0;

  while (low < high) {
    let length = high - low;

    let testMax = Math.min(height[low], height[high]) * length;
    if (testMax > max) max = testMax;

    if (height[low] < height[high]) low++;
    else high--;
  }

  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea([2, 1]));
