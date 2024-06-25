/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function (brackets, income) {
  let ans = 0;
  let lastUp = 0;
  for (let i = 0; i < brackets.length; i++) {
    if (income >= brackets[i][0]) {
      ans += ((brackets[i][0] - lastUp) * brackets[i][1]) / 100;
      lastUp = brackets[i][0];
    } else {
      ans += ((income - lastUp) * brackets[i][1]) / 100;
      break;
    }
  }
  return ans;
};
