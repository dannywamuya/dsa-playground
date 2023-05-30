/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [];
  res.push(intervals[0]);

  let l = 0;
  let r = 1;

  while (l < r && r < intervals.length) {
    let curr = res[l];
    let next = intervals[r];

    if (res.length <= l) {
      l--;
      continue;
    }

    // checking if the end of the current interval is greater than the start of the next interval which means that they are overlapping
    if (curr[1] > next[0]) {
      // check if the end of the next interval is greater that the end of the start interval
      if (curr[1] < next[1]) {
        res[l][1] = next[1];
      }
      r++;
      // checking if the end of the current interval is less than the start of the next interval which means that they are overlapping
    } else if (curr[1] < next[0]) {
      res.push(next);
      r++;
      l++;
    } else {
      let newInterval = [curr[0], next[1]];
      res[l] = newInterval;
      r++;
      l++;
    }
  }

  return res;
};

const intervalsArr = [
  [
    [4, 5],
    [1, 4],
    [0, 1],
  ],
  [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ],
  [
    [1, 4],
    [4, 5],
  ],
  [
    [1, 4],
    [0, 4],
  ],
  [
    [1, 4],
    [2, 3],
  ],
  [
    [1, 4],
    [0, 5],
  ],
];

intervalsArr.forEach((arr) => console.log(merge(arr)));
