/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1]) count++;
    else count = 0;
    if (count > max) max = count;
  }
  return max + 1;
};
