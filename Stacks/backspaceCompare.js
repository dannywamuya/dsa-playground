/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let stackS = [];
  let stackT = [];

  for (let c of Array.from(s.split(""))) {
    if (c !== "#") stackS.push(c);
    else stackS.pop();
  }

  for (let c of Array.from(t.split(""))) {
    if (c !== "#") stackT.push(c);
    else stackT.pop();
  }

  let strS = stackS.join("");
  let strT = stackT.join("");
  return strS === strT;
};

console.log(backspaceCompare("", ""));
console.log(backspaceCompare("ab#c", "ad#c"));
