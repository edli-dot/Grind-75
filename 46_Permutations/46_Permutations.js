/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  const backtrack = (currentPermutation) => {
    // Base case: if the current permutation is complete, add it to the result
    if (currentPermutation.length === nums.length) {
      result.push([...currentPermutation]);
      return;
    }
    // Recursive case:
    for (let i = 0; i < nums.length; i++) {
      //pre recursion
      if (!currentPermutation.includes(nums[i])) {
        currentPermutation.push(nums[i]);
        //recursion
        backtrack(currentPermutation);
        //post recursion
        currentPermutation.pop();
      }
    }
  };
  // Start the backtracking with an empty permutation
  backtrack([]);
  return result;
};
