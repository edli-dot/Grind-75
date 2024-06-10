/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */

var maximumBags = function (capacity, rocks, additionalRocks) {
  let remaining = [];
  for (let i = 0; i < capacity.length; i++) {
    remaining.push(capacity[i] - rocks[i]);
  }
  remaining.sort((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < remaining.length; i++) {
    if (remaining[i] <= additionalRocks) {
      additionalRocks -= remaining[i];
      count++;
    } else {
      break;
    }
  }
  return count;
};

/**
 * easy thought process
 * calculate the difference from capacity and current rocks
 * sort differences b/c oyu want to fill the most bags possible
 * fill bags until you can't and return the total filled bags
 */
