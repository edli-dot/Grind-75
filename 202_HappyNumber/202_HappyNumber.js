/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let cache = {};
  let sum;
  while (!cache[n]) {
    sum = 0;
    let realDigits = n.toString().split('').map(Number);
    for (let digit of realDigits) {
      sum += digit * digit;
    }
    if (sum === 1 || sum == 7) return true;
    else if (cache[sum]) return false;
    else {
      cache[n] = true;
      n = sum;
    }
  }
};
