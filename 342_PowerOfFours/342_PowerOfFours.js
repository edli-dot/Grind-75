/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n <= 0) return false;
  while (n > 1) {
    //This is basically an early exit case
    if (n % 4 != 0) return false;
    n = n / 4;
  }
  return n === 1;
};
