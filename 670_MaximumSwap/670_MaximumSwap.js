var maximumSwap = function (num) {
  let nums = num.toString().split('').map(Number);
  let maxId = -1;
  let maxDigit = -1;
  let x = -1;
  let y = -1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > maxDigit) {
      // record the maximum digit and its index
      maxDigit = nums[i];
      maxId = i;
    } else if (nums[i] < maxDigit) {
      // if point is smaller than max, we found first place holder to swap with
      x = i;
      y = maxId;
    }
  }

  if (x == -1) return num;

  [nums[x], nums[y]] = [nums[y], nums[x]];

  return Number(nums.join(''));
};

/**
 * Initial thought process was first run through the array to find the maximum digit
 * then iterate through to find the first instance where digit is less than max then switch
 * problem was that if the max digit was already first, we would have to keep track of the second most digit to swap
 *
 * this method is method. we start from the end and work our way up, keep track of the largest digit and its index
 * and only when we find a point that is smaller do we swap at the very end
 * working backwards to ensure we swap a lower digit position with a higher digit position
 */
