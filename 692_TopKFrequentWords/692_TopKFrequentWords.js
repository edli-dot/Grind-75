/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  let cache = {};
  for (let word of words) {
    cache[word] = (cache[word] || 0) + 1;
  }
  const order = Object.keys(cache).sort((x, y) => {
    if (cache[y] == cache[x]) {
      //localeCompare returns number indicating whether string comes before, after, or same strings
      //this would alphabetize if frequency is the same
      return x.localeCompare(y);
    }
    return cache[y] - cache[x];
  });
  return order.slice(0, k);
};
