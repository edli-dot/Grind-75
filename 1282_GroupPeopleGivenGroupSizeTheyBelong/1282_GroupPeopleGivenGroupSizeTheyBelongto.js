/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  //Hash Map
  const temp_group = {};
  //Store the answer
  const result = [];
  for (let i = 0; i < groupSizes.length; i++) {
    //Variable to mark the size of the group
    const size = groupSizes[i];
    //If there is a hash table entry already
    if (!temp_group[size]) {
      temp_group[size] = [];
    }
    //Push value into the hash
    temp_group[size].push(i);
    //Conditional to check if we need a new hash
    //If so, push what we have already into the answer
    //delete hash to save on memory
    if (temp_group[size].length === size) {
      result.push([...temp_group[size]]);
      delete temp_group[size];
    }
  }
  return result;
};
