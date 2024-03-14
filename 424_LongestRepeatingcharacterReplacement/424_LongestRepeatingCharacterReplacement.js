/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let cache = {};
  let left = 0;
  let answer = 0;
  let maxCount = 0; // grack maximum frequency in current window
  for (let i = 0; i < s.length; i++) {
    cache[s[i]] ? cache[s[i]]++ : (cache[s[i]] = 1);
    maxCount = Math.max(maxCount, cache[s[i]]);

    // if the total length of the window minus the maximum frequency exceeds k,
    // shrink the window by moving the left pointer
    if (i - left + 1 - maxCount > k) {
      cache[s[left]]--;
      left++;
    }
    answer = Math.max(answer, i - left + 1);
  }
  return answer;
};
