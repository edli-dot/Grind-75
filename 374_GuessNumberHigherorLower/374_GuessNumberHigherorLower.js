/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let upper = n;
  let lower = 1;
  let middle = 0;
  while (upper >= lower) {
    middle = lower + Math.floor((upper - lower) / 2);
    if (guess(middle) == 0) {
      return middle;
    } else if (guess(middle) < 0) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
  }
};
