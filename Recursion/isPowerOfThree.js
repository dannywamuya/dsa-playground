var isPowerOfThree = (n) => {
  if (n === 0) return false;
  if (n === 1) return true;
  if (n / 3 === 1 && n % 3 === 0) {
    return true;
  } else if (n % 3 === 1) {
    return false;
  } else {
    return isPowerOfThree(n / 3);
  }
};

console.log(Math.floor(1 / 3));
console.log(Math.floor(4 / 3));
console.log(Math.floor(3 / 3));
console.log(Math.floor(9 / 3));
console.log(Math.floor(27 / 3));

// console.log(isPowerOfThree(1));
// console.log(isPowerOfThree(4));
// console.log(isPowerOfThree(3));
// console.log(isPowerOfThree(9));
// console.log(isPowerOfThree(81));
// console.log(isPowerOfThree(27));
