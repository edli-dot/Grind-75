/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let pos = 0,
    n = 0,
    tot = 0,
    max = 0,
    tail = 0;
  while (pos < nums.length) {
    if (nums[pos++] == 0) n++;
    else tot++;

    while (n >= 2) {
      nums[tail++] == 0 ? n-- : tot--;
    }
    max = max < tot ? tot : max;
  }
  return n == 0 ? max - 1 : max;
};

/**
 * just a sliding window problem with some logic in the event of no zeros
 */
