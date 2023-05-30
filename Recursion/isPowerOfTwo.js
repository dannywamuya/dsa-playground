var isPowerOfTwo = function (n) {
  if (n === 0) return false;
  if (n === 1) return true;
  if (n / 2 === 1 && n % 2 === 0) {
    return true;
  } else if (n % 2 === 1) {
    return false;
  } else {
    return isPowerOfTwo(n / 2);
  }
};

// var isPowerOfTwo2 = function (n) {
//   if (n === 0) return false;
//   if (n === 1) return true;
//   if (n % 2 === 0) return isPowerOfTwo2(Math.floor(n / 2));
//   else return false;
// };

var isPowerOfTwo2 = function (n) {
  // another check
  return n >= 1 && Math.log2(n) % 2 == 0;
};

console.log(isPowerOfTwo2(0));
console.log(isPowerOfTwo2(1));
console.log(isPowerOfTwo2(2));
console.log(isPowerOfTwo2(9));
console.log(isPowerOfTwo2(4));
console.log(isPowerOfTwo2(16));
