/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
  let cache_words1 = {};
  let cache_words2 = {};
  for (let i = 0; i < words1.length; i++) {
    cache_words1[words1[i]] = (cache_words1[words1[i]] || 0) + 1;
  }
  for (let i = 0; i < words2.length; i++) {
    if (cache_words1[words2[i]] == 1) {
      cache_words2[words2[i]] = (cache_words2[words2[i]] || 0) + 1;
    }
  }
  let count = 0;
  for (let word in cache_words2) {
    if (cache_words2[word] == 1 && cache_words1[word] == 1) count++;
  }
  return count;
};
