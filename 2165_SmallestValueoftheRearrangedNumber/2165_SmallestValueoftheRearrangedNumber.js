/**
 * @param {number} num
 * @return {number}
 */
var smallestNumber = function (num) {
  let neg = false;
  if (Number(num) < 0) {
    num = num
      .toString()
      .split('')
      .splice(1)
      .sort((a, b) => a - b);
    neg = true;
  } else
    num = num
      .toString()
      .split('')
      .sort((a, b) => a - b);

  let ans = '';
  let i = 0;
  let first = false;
  if (!neg) {
    while (i < num.length) {
      if (first == false && num[i] > 0) {
        first = true;
        ans = num[i++] + ans;
      } else ans += num[i++];
    }
  } else {
    while (i <= num.length) {
      if (first == false) {
        first = true;
        ans += '-';
      } else ans += num[num.length - i];
      i++;
    }
  }
  return Number(ans);
};
/**
one sort but have to accomdate for possible negative number and no leading zeros
if positive, first lowest digit above zero will be the first digit of the number
if negative, first placeholder will be negative sign followed by decreasing digit values
 */
