/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function (banned, n, maxSum) {
  let cache = new Set();
  for (let num of banned) {
    if (num <= n) cache.add(num);
  }
  let count = 0;
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    if (!cache.has(i)) {
      ans += i;
      count++;
    }
    if (ans > maxSum) {
      count--;
      break;
    }
  }
  return count;
};

/**
 * put banned numbers into a set so look up time is o(n)
 * add until maximum value is reached then return count - 1
 */
