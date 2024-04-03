const isPalindrome = require('../9_PalindromeNumber/9_PalindromeNumber.js');

describe('isPalindrome', () => {
  it('Palindrome Numbers should pass', () => {
    //Set up variables for function
    const s = 121;

    // Instance of function
    const result = isPalindrome(s);

    // Comparison
    expect(result).toEqual(true);
  });

  it('should fail for negative numbers', () => {
    const s = -121;

    const result = isPalindrome(s);

    expect(result).toEqual(false);
  });
});
