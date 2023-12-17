/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 0) return 0;
  if (n <= 2) return n;

  return climbStairs(n - 1) + climbStairs(n - 2);
};
//Works but limitation when reaching high numbers

var climbStairs = function (n) {
  const memo = {};
  function climb(n) {
    if (n <= 0) return 0;
    if (n <= 2) return n;
    // Check if result for n is already memoized
    if (memo[n]) return memo[n];
    // Recursive calculation and memoization
    memo[n] = climb(n - 1) + climb(n - 2);
    return memo[n];
  }
  return climb(n);
};
//Implementation of memoization to store and reuse intermediate results

var climbStairs = function (n, memo = {}) {
  if (n <= 0) return 0;
  if (n <= 2) return n;

  // Check if result for n is already memoized
  if (memo[n]) return memo[n];

  // Recursive calculation and memoization
  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);

  return memo[n];
};
