/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

var minEatingSpeed = function (piles, h) {
  let min = 1;
  let max = Math.max(...piles);
  if (h == piles.length) return max;
  // Binary search
  while (min < max) {
    const mid = Math.floor((min + max) / 2);
    let hours = 0;
    for (let i = 0; i < piles.length; i++) {
      hours += Math.ceil(piles[i] / mid);
    }
    if (hours <= h) {
      max = mid;
    } else {
      min = mid + 1;
    }
  }
  return min;
};

/**
 * Binary search
 * its just that we perform operation to get minimum number of divisors per index
 */
module.exports = minEatingSpeed;
