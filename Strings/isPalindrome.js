/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let strArr = [];
  for (let c of Array.from(s.split(""))) {
    const charCode = c.charCodeAt(0);
    const isAlphaNumeric =
      (charCode >= 97 && charCode <= 122) ||
      (charCode >= 48 && charCode <= 57) ||
      (charCode >= 65 && charCode <= 90);

    if (isAlphaNumeric) {
      strArr.push(c.toLowerCase());
    }
  }

  let l = 0;
  let r = strArr.length - 1;

  while (l < r) {
    // console.log(strArr[l], strArr[r]);
    // console.log(l, r);
    if (strArr[l] !== strArr[r]) {
      return false;
    }
    r--;
    l++;
  }

  return true;
};

console.log(isPalindrome("race a car"));
console.log(isPalindrome("eeee"));
console.log(isPalindrome("boob"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
// amanaplanacanalpanama
