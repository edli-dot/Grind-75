/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  piles.sort((a, b) => b - a);
  let count = piles.length - 1;
  let pos = 1;
  let ans = 0;
  while (count > 0) {
    ans += piles[pos];
    count -= 3;
    pos += 2;
  }
  return ans;
};

/**
 * light logic required
 * etc if piles = [2,4,1,2,7,8]
 * pick (2,7,8) and (1,2,4)
 * always want second largest and largest to be closest in value
 * third digit will want to be lowest as possible
 * n log n
 */
