const findMin = require('../153_FindMininRotatedSortedArray/153_FindMininRotatedSortedArray.js');

describe('Find Minimum of Rotated Sorted Array', () => {
  it('Returns min of a unrotated array', () => {
    let s = [1, 2, 3, 4, 5];
    let result = findMin(s);
    expect(result).toEqual(1);
  });

  it('Returns min of a rotated array', () => {
    let s = [3, 4, 5, 1, 2];
    let result = findMin(s);
    expect(result).toEqual(1);
  });

  it('Returns min when rotated .length - 1 times', () => {
    let s = [2, 3, 4, 5, 1];
    let result = findMin(s);
    expect(result).toEqual(1);
  });
});
