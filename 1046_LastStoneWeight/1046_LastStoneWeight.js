/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((x, y) => x - y);
    let heavy = stones.pop();
    let second = stones.pop();
    const clash = heavy - second;
    if (clash > 0) stones.push(clash);
  }
  return stones;
};
