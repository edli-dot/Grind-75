/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (!nums || nums.length === 0) return;

  const rotate = k % nums.length;
  if (rotate === 0) return;

  const cut = nums.slice(-rotate);
  const remaining = nums.slice(0, nums.length - rotate);

  for (let i = 0; i < cut.length; i++) {
    nums[i] = cut[i];
  }
  for (let i = 0; i < remaining.length; i++) {
    nums[rotate + i] = remaining[i];
  }
};

//Need to revisit and perform this in constant memory. no additional memory
//modify in place
