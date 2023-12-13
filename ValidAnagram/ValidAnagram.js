/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return t.split('').sort().join('') === s.split('').sort().join('')
    ? true
    : false;
};

//Slow but simple
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  const counter = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!counter[char]) {
      counter[char] = 1;
    } else counter[s[i]] += 1;
  }
  for (let i = 0; i < t.length; i++) {
    const chart = t[i];
    if (chart in counter) {
      counter[t[i]] -= 1;
    } else return false;
  }
  const output = Object.values(counter).every((x) => x === 0); //Boolean
  return output;
};

//Faster. Runtime of o(n)
