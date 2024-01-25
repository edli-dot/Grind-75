/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  return Number(x.toString().split('').reverse().join('')) == x ? true : false;
};

//This requires the number to be converted to a string
//can we do this without converting to a string

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let reverse = 0;
  let copy = x;
  while (copy > 0) {
    reverse = reverse * 10 + (copy % 10);
    copy = Math.floor(copy / 10);
  }
  return reverse === x;
};

//thought process is that we add a digit to reverse while taking away the last digit in copy
//once all the digits have been moved to reverse aka copy = 0; compare the reverse number to the original
