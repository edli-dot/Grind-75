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

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (!s.length) return false;
  s = s
    .toLowerCase()
    .split('')
    .filter((x) => (x >= '0' && x <= '9') || (x >= 'a' && x <= 'z'));
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (s[start] != s[end]) return false;
    start++;
    end--;
  }
  return true;
};

//Slightly faster by checking n/2 points
