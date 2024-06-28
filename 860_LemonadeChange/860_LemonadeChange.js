/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let cache = { 5: 0, 10: 0, 20: 0 };
  for (let i = 0; i < bills.length; i++) {
    const cash = bills[i];
    cache[bills[i]]++;
    if (cash == 10) {
      if (cache[5] > 0) cache[5]--;
      else return false;
    } else if (cash == 20) {
      if (cache[10] > 0 && cache[5] > 0) {
        cache[5]--;
        cache[10]--;
      } else if (cache[5] >= 3) {
        cache[5] -= 3;
      } else return false;
    }
  }
  return true;
};
