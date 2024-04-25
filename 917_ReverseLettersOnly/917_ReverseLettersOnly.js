/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  s = s.split('');
  let front = 0;
  let back = s.length - 1;
  function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
  }
  while (front < back) {
    if (isLetter(s[front]) && isLetter(s[back])) {
      let temp = s[back];
      s[back] = s[front];
      s[front] = temp;
      front++;
      back--;
    } else if (isLetter(s[front])) back--;
    else if (isLetter(s[back])) front++;
    else {
      back--;
      front++;
    }
  }
  return s.join('');
};
