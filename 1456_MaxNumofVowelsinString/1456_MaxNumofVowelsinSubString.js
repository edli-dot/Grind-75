/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let left = 0;
  let right = 0;
  s = s.split('');
  let vowels = { a: true, e: true, i: true, o: true, u: true };
  let max = 0;
  let compare = 0;
  while (right < k) {
    if (s[right++] in vowels) compare++;
  }
  max = Math.max(compare, max);
  for (let i = k; i < s.length; i++) {
    if (max == k) return k;
    if (s[i] in vowels) compare++;
    if (s[left++] in vowels) compare--;
    max = Math.max(compare, max);
  }
  return max;
};
