/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let modify = s.split(' ');
  for (let i = 0; i < s.length; i++) {
    if (modify[i] == '') {
      modify.splice(i, 1);
      i--;
    }
  }
  return modify.reverse().join(' ');
};
