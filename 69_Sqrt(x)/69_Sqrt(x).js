/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let l = 0;
  let r = x;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (mid ** 2 <= x && (mid + 1) ** 2 > x) {
      return mid;
    } else if (mid ** 2 < x) {
      l = mid + 1;
    } else r = mid - 1;
  }
};

/** Same idea of comparing the middle value and changing frame of reference
 * could also try comparing products instead of squaring. computationally a bit faster
 *
 */
