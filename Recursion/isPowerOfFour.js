/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  console.log(n);
  if (n === 0) return false;
  if (n === 1) return true;
  if (n % 4 === 0) return isPowerOfFour(Math.floor(n / 4));
  else return false;
};

console.log(isPowerOfFour(16));
