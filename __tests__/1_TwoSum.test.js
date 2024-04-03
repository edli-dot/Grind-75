const twoSum2 = require('../1_TwoSum/1_TwoSum.js'); //imports function

describe('twoSum2', () => {
  it('returns correct indices for valid input', () => {
    //Set up variables for function
    const nums = [2, 7, 11, 15];
    const target = 9;

    // Instance of function
    const result = twoSum2(nums, target);

    // Comparison
    expect(result).toEqual(expect.arrayContaining([0, 1]));
  });

  it('returns empty array for no solution', () => {
    const nums = [2, 7, 11, 15];
    const target = 10; // No pair of numbers add up to 10

    const result = twoSum2(nums, target);

    expect(result).toEqual([]);
  });

  it('handles negative numbers', () => {
    const nums = [-3, 4, 3, 90];
    const target = 0;

    const result = twoSum2(nums, target);

    expect(result).toEqual(expect.arrayContaining([0, 2]));
  });

  it('handles duplicate numbers', () => {
    const nums = [3, 3];
    const target = 6;

    const result = twoSum2(nums, target);

    expect(result).toEqual(expect.arrayContaining([0, 1]));
  });
});

//jest __tests__/1_TwoSum.test.js
//command for only singular test to run
