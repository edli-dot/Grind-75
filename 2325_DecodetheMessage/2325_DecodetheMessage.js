/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  let result = '';
  //returns a key w/o any duplicates
  key = Array.from(new Set(key.split(' ').join('')));
  const hash = {};
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < alpha.length; i++) {
    hash[key[i]] = alpha[i];
  }
  for (let chr of message) {
    //adds the value associated to hash table or a space
    result += hash[chr] || ' ';
  }
  return result;
};
