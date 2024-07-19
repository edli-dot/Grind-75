/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
  if (suits.every((x) => x == suits[0])) return 'Flush';
  let cache = {};
  for (let i = 0; i < ranks.length; i++) {
    cache[ranks[i]] = (cache[ranks[i]] || 0) + 1;
    if (cache[ranks[i]] == 3) return 'Three of a Kind';
  }
  let val = Object.values(cache);
  for (let i of val) {
    if (i == 2) return 'Pair';
  }
  return 'High Card';
};
