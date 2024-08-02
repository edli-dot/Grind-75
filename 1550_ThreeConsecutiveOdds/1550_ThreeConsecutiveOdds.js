/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  let status1 = false,
    status2 = false,
    status3 = false;
  let index = 0;
  while (index < arr.length) {
    [status1, status2] = [status2, status3];
    status3 = arr[index] % 2 != 0;
    if (status1 && status2 && status3) return true;
    index++;
  }
  return false;
};
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] % 2 != 0 && arr[i + 1] % 2 != 0 && arr[i + 2] % 2 != 0)
      return true;
  }
  return false;
};
