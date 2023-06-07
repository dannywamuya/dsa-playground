/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let l = 0;
  let r = matrix.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    let cur = matrix[mid];

    if (target < cur[0]) {
      r = mid - 1;
    } else if (target > cur[cur.length - 1]) {
      l = mid + 1;
    } else {
      let low = 0;
      let high = cur.length - 1;

      while (low <= high) {
        let cent = Math.floor((high + low) / 2);
        // console.log(cur[cent]);

        if (cur[cent] === target) return true;

        if (target > cur[cent]) {
          low = cent + 1;
        } else {
          high = cent - 1;
        }
      }
    }
  }

  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    5
  )
);
