/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let ans = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    const buy = prices[i];
    const sell = prices[i + 1];
    if (buy < sell) ans += sell - buy;
  }
  return ans;
};

/**
 * works but ddint feel like a dp
 * just needed to take all points that were positive to get the maximum value
 */
