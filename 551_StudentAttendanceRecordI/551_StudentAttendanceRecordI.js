/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let countA = 0;
  let countL = 0;
  s.split('');
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 'A') {
      countA++;
      countL = 0;
    } else if (s[i] == 'L') {
      countL++;
    } else countL = 0;
    if (countA > 1) return false;
    if (countL == 3) return false;
  }
  return true;
};
