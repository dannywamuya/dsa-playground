/**
 * @param {number[]} nums
 * @param {number} k
 */
var rotate = function (nums, k) {
  /**
   * using slice
   */
  //   nums = [
  //     ...nums.slice(nums.length - k, nums.length),
  //     ...nums.slice(0, nums.length - k),
  //   ];

  /**
   * using unshift and pop Time - O(n^2) (Unshift and pop operations are O(n))
   */
  // for (let i = 0; i < k; i++) {
  //   nums.unshift(nums.pop());
  // }

  
  let n = nums.length;
  // Normalize k in cases where k is greater than the length of nums 
  k %= n;

  // reverse the whole array
  reverse(nums, 0, n - 1);
  // reverse the first k elements
  reverse(nums, 0, k - 1);
  // reverse the elements after k
  reverse(nums, k, n - 1);

  console.log(nums);
};

/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 */
function reverse(nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

rotate([1, 2, 3, 4, 5, 6, 7], 3);
