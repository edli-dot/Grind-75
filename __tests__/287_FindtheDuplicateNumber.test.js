const findDuplicate = require('../287_FindtheDuplicateNumber/287_FindtheDuplicateNumber.js');

describe('Find the Duplicate Number', () => {
  it('Finds the duplicate number', () => {
    const s = [1, 3, 4, 2, 2];
    const result = findDuplicate(s);
    expect(result).toEqual(2);
  });

  it('Finds duplicate number if all nubmers are thee same', () => {
    const s = [1, 1, 1, 1, 1, 1];
    const result = findDuplicate(s);
    expect(result).toEqual(1);
  });
});
