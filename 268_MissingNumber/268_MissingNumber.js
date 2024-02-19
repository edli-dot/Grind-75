/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let answer = -nums.length;
  for (let i = 0; i < nums.length; i++) {
    answer = answer + nums[i] - i;
  }
  return Math.abs(answer);
};


/**
 * Had the question stated that the the numbers dont necessarily start from 0
 * i would have two more variables, one to track the lowest number and one tot rack the highest number
 * perform a gaussian summatiohn to find the expected total and subtrtact that from the actual total
 * then retunr the absolute value of the difference