/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
  if (cost.length.length < 3) return cost.reduce((x, y) => x + y);
  cost.sort((x, y) => y - x);
  let sum = 0;
  let y = 0;
  for (let i = 0; i < cost.length; i++) {
    y++;
    if (y == 3) {
      y = 0;
    } else sum += cost[i];
  }
  return sum;
};

/**
 *
 * greedy problems typically require some sort of sorting as opposed to DP problems
 */
