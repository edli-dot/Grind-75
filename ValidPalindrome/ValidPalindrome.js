/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (!s.length) return false;
  const justLetters = s
    .toLowerCase()
    .split('')
    .filter((x) => (x >= '0' && x <= '9') || (x >= 'a' && x <= 'z'))
    .join('');
  return justLetters.split('').reverse().join('') === justLetters;
};

//Nature of the problem, this is a time complexity of o(n)
