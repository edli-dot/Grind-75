// Initialization:
// counter: Initialized to 0, will be used to count the pairs.
// numCount: An empty map to keep track of the count of each number encountered.
// First Iteration (num = 1):
// difference: 6 - 1 = 5
// numCount.has(5): No, so increment the count for 1 in the map: { 1: 1 }.
// Second Iteration (num = 2):
// difference: 6 - 2 = 4
// numCount.has(4): No, so increment the count for 2 in the map: { 1: 1, 2: 1 }.
// Third Iteration (num = 3):
// difference: 6 - 3 = 3
// numCount.has(3): No, so increment the count for 3 in the map: { 1: 1, 2: 1, 3: 1 }.
// Fourth Iteration (num = 4):
// difference: 6 - 4 = 2
// numCount.has(2): Yes, and count > 0. Decrement the count for 2 in the map: { 1: 1, 2: 0, 3: 1 }. Increment counter to 1.
// Fifth Iteration (num = 3):
// difference: 6 - 3 = 3
// numCount.has(3): Yes, and count > 0. Decrement the count for 3 in the map: { 1: 1, 2: 0, 3: 0 }. Increment counter to 2.
// Result:
// The final value of counter is 2, indicating that there are two pairs of numbers in the array whose sum is equal to k = 6.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  if (!nums) return undefined;

  let counter = 0;
  let numCount = new Map(); // Use a map to keep track of the count of each number

  for (let num of nums) {
    let difference = k - num;

    // Check if the difference is already in the map
    if (numCount.has(difference) && numCount.get(difference) > 0) {
      // Decrement the count for the difference
      numCount.set(difference, numCount.get(difference) - 1);
      counter++;
    } else {
      // Increment the count for the current number
      numCount.set(num, (numCount.get(num) || 0) + 1);
    }
  }

  return counter;
};
