/**
 *
 * @param {number[]} nums
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
const selectionSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        let temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
      }
    }
  }
};

/**
 *
 * @param {number[]} nums
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
const bubbleSort = (nums) => {
  for (let k = 0; k < nums.length; k++) {
    for (let i = 0; i < nums.length - k - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        let temp = nums[i + 1];
        nums[i + 1] = nums[i];
        nums[i] = temp;
      }
    }
  }
};

/**
 *
 * @param {number[]} nums
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[i]) {
        let temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
      }
    }
  }
};

/**
 *
 * @param {number[]} nums
 *
 * Time Complexity: O(nLogn)
 * Space Complexity: O(1)
 */
const mergeSort = (nums) => {
  /**
   *
   * @param {number[]} l sub-array on the left
   * @param {number[]} r sub-array on the right
   * @param {number[]} a whole array
   */
  const merge = (l, r, a) => {
    let i = 0; // index pointer for l
    let j = 0; // index pointer for r
    let k = 0; // index pointer for a which is the insertion point of the smallest item;

    let nL = l.length;
    let nR = r.length;

    while (i < nL && j < nR) {
      if (l[i] <= r[j]) {
        a[k] = l[i];
        i++;
      } else {
        a[k] = r[j];
        j++;
      }
      k++;
    }

    while (i < nL) {
      a[k] = l[i];
      k++;
      i++;
    }

    while (j < nR) {
      a[k] = r[j];
      k++;
      j++;
    }
  };

  if (nums.length > 2) {
    let half1 = nums.slice(0, nums.length / 2);
    let half2 = nums.slice(nums.length / 2, nums.length);
    let sortedhalf1 = mergeSort(half1);
    let sortedhalf2 = mergeSort(half2);
    merge(sortedhalf1, sortedhalf2, nums);
    return nums;
  } else if (nums.length === 1) {
    return nums;
  } else {
    if (nums[0] > nums[1]) {
      [nums[0], nums[1]] = [nums[1], nums[0]];
      return nums;
    } else {
      return nums;
    }
  }
};

function generateUnsortedArray(n) {
  const array = [];
  for (let i = 0; i < n; i++) {
    // Generate a random number between -n and n (inclusive)
    const num = Math.floor(Math.random() * (2 * n + 1)) - n;
    array.push(num);
  }
  return array;
}

const arr = generateUnsortedArray(100000);
const arr1 = arr;
const arr2 = arr;
const arr3 = arr;
const arr4 = arr;

console.time("Test");
mergeSort(arr);
console.timeEnd("Test");

console.time("Merge Sort");
mergeSort(arr1);
console.timeEnd("Merge Sort");

console.time("Selection");
selectionSort(arr2);
console.timeEnd("Selection");

console.time("Bubble");
bubbleSort(arr3);
console.timeEnd("Bubble");

console.time("Insertion");
insertionSort(arr4);
console.timeEnd("Insertion");
