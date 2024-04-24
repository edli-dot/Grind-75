const subsets = require('../78_Subsets/78_Subets.js');

describe('Subsets', () => {
  it('Returns all possible subsets w/o any duplicates', () => {
    const s = [1, 2, 3];
    const result = subsets(s);
    expect(result).toEqual([
      [],
      [1],
      [2],
      [1, 2],
      [3],
      [1, 3],
      [2, 3],
      [1, 2, 3],
    ]);
  });

  it('Given a singular number', () => {
    const s = [0];
    const result = subsets(s);
    expect(result).toEqual([[], [0]]);
  });
});
