const lengthOfLongestSubstring = require('../3_LongestSubStringWithoutRepeatingChars/3_LongestSubstringWithoutRepeatingChar.js');

describe('lengthOfLongestSubstring', () => {
  it('returns correct substring', () => {
    //Set up variables for function
    const s = 'abcabcbb';

    // Instance of function
    const result = lengthOfLongestSubstring(s);

    // Comparison
    expect(result).toEqual(3);
  });

  it('single char returns single char', () => {
    const s = 'bbbbbbbbb';

    const result = lengthOfLongestSubstring(s);

    expect(result).toEqual(1);
  });
});
