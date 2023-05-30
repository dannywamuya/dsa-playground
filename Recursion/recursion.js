/**
 * Factorial
 *  n! = n * (n - 1) * (n - 2) * .... * 1
 *  n! = n * (n - 1)!
 *
 *  @param {number} n
 *
 */
const factorial = (n) => {
  console.log(n);
  if (n === 0) return 1;
  else return n * factorial(n - 1);
};

// console.log(factorial(5));

/**
 * Fibonnaci
 *
 * f(n) = f(n - 1) + f(n - 2)
 *
 * Using Loops
 * Time = O(n)
 * Space = O(n)
 *
 * @param {number} n
 */
const fib = (n) => {
  if (n <= 1) return 1;
  let f = 0;
  let f1 = 0;
  let f2 = 1;
  for (let i = 0; i < n; i++) {
    f = f1 + f2;
    f1 = f2;
    f2 = f;
  }

  return f;
};

/**
 * Fibonnaci
 *
 * f(n) = f(n - 1) + f(n - 2)
 *
 * Using Recursion
 * Time = O(2^n) Exponential Time
 * Space =
 *
 * @param {number} n
 */
const fib2 = (n) => {
  if (n === 0) return 1;
  if (n === 1) return 1;

  return fib2(n - 1) + fib2(n - 2);
};

/**
 * Fibonnaci
 *
 * f(n) = f(n - 1) + f(n - 2)
 *
 * Using Recursion
 * Time = O(2^n) Exponential Time
 * Space =
 *
 * @param {number} n
 */
let m = 45;
let memo = Array(m + 1).fill(-1);

const fib3 = (n) => {
  if (n <= 1) return 1;

  if (memo[n] !== -1) return memo[n];
  memo[n] = fib3(n - 1) + fib3(n - 2);

  return memo[n];
};

/**
 * Find x
 *
 * @param {number} n Number
 * @param {number} x Number
 *
 */
const pow = (x, n) => {
  if (n === 0) return 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  if (n === 1) return x;
  else return x * pow(x, n - 1);
};

/**
 * Find x
 *
 * @param {number} n Number
 * @param {number} x Number
 *
 */
const pow2 = (x, n) => {
  if (n === 0) return 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  if (n % 2 === 0) {
    const y = pow2(x, n / 2);
    return y * y;
  } else return x * pow2(x, n - 1);
};

let x = 2;
let y = -2;

/**
 *
 * @param {number} n
 */
let count = 0;
const sqrt = (n) => {
  if (n === 1) return;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  } else {
    count++;
    return sqrt(n / 2);
  }
};

sqrt(16);
console.log(count);

// console.log(pow(x, y));
// console.log(pow2(x, y));

// console.time("Test");
// console.log(pow(x, y));
// console.timeEnd("Test");
// console.time("Pow 1");
// console.log(pow(x, y));
// console.timeEnd("Pow 1");
// console.time("Pow 2");
// console.log(pow2(x, y));
// console.timeEnd("Pow 2");

// console.time("Fib Test");
// console.log(fib(m));
// console.timeEnd("Fib Test");
// console.time("Fib 1");
// console.log(fib(m));
// console.timeEnd("Fib 1");
// console.time("Fib 2");
// console.log(fib2(m));
// console.timeEnd("Fib 2");
// console.time("Fib 3");
// console.log(fib3(m));
// console.timeEnd("Fib 3");
