/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  nums1 = new Set(nums1);
  nums2 = new Set(nums2);
  let ans = [];
  for (let num of nums1) {
    if (nums2.has(num)) ans.push(num);
  }
  return ans;
};
