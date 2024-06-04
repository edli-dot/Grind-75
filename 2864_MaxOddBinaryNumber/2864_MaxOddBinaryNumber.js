/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
  let onesCount = 0;
  let zerosCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') {
      onesCount++;
    } else {
      zerosCount++;
    }
  }
  if (onesCount === 0) {
    return '';
  }
  let result = '';
  for (let i = 0; i < onesCount - 1; i++) {
    result += '1';
  }
  for (let i = 0; i < zerosCount; i++) {
    result += '0';
  }
  result += '1';
  return result;
};

var maximumOddBinaryNumber = function (s) {
  s = s.split('').sort((a, b) => b - a);
  s.push(1);
  s.shift();
  s = s.join('');
  return s;
};
