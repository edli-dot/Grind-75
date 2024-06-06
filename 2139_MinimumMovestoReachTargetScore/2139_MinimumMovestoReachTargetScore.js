/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function (target, maxDoubles) {
  if (maxDoubles == 0) return target - 1;
  let count = 0;
  while (target > 1) {
    if (target % 2 == 0 && maxDoubles > 0) {
      target /= 2;
      maxDoubles--;
    } else target--;
    count++;
  }
  return count;
};

var minMoves = function (target, maxDoubles) {
  if (maxDoubles == 0) return target - 1;
  let count = 0;
  while (target > 1 && maxDoubles > 0) {
    if (target % 2 == 0) {
      target /= 2;
      maxDoubles--;
    } else target--;
    count++;
  }
  return count + target - 1;
};
