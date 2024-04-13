/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
  let unique = new Set(nums2);
  for (let i = 0; i < nums1.length; i++) {
    const current = nums1[i];
    if (unique.has(current)) return current;
  }
  return -1;
};
