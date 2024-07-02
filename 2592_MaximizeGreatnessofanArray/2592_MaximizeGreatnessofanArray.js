var maximizeGreatness = function (nums) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = 1;
  let total = 0;
  while (right < nums.length) {
    if (nums[right] > nums[left]) {
      total++;
      right++;
      left++;
    } else {
      right++;
    }
  }
  return total;
};
