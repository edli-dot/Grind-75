/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let empty = 0;
  let ans = 0;

  while (numBottles > 0) {
    ans += numBottles;
    let newBottles = Math.floor((numBottles + empty) / numExchange);
    empty = (numBottles + empty) % numExchange;
    numBottles = newBottles;
  }

  return ans;
};
