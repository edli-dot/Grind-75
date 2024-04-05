const search = require('../33_SearchinRotatedSortedArray/33_SearchinRotatedSortedArray.js');

describe('Search in a Rotated Sorted Array', () => {
  it('Locates num in rotated array', () => {
    let s = [4, 5, 6, 7, 0, 1, 2];
    const result = search(s, 0);
    expect(result).toEqual(4);
  });

  it('Returns -1 when target not found', () => {
    const s = [4, 5, 6, 7, 0, 1, 2];
    const result = search(s, 3);
    expect(result).toEqual(-1);
  });

  it('Locates num w/ just a single entry', () => {
    const s = [0];
    const result = search(s, 0);
    expect(result).toEqual(0);
  });
});
