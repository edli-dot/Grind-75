/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const end = Number.isInteger(s.length / 2)
    ? s.length / 2
    : Math.floor(s.length / 2) + 1;
  for (let i = 0; i < end; i++) {
    let temp = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = temp;
  }
};
