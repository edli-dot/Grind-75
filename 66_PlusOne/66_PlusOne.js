/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let status = false;
  let position = digits.length - 1;
  while (digits[position] == 9) {
    digits[position] = 0;
    position -= 1;
    status = true;
  }
  if (digits[0] == 0 && status) digits.unshift(1);
  else digits[position]++;
  return digits;
};
