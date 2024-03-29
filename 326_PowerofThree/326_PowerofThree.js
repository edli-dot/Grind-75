/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n <= 0) return false;
  if (n == 1) return true;
  while (n > 3) {
    n = n / 3;
  }
  return Number.isInteger(n / 3) ? true : false;
};
