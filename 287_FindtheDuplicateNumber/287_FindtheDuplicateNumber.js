/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let slow = nums[0];
  let fast = nums[0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findDuplicate = function(nums) {
//     let cache = {}
//     for (let i = 0; i < nums.length ; i++){
//         if (cache[nums[i]]) return nums[i]
//         else cache[nums[i]] = 1
//     }
// };

module.exports = findDuplicate;
