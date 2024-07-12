/**
 * Given a list/array of Strings, find and group together all Strings that are "buddies" with one another.
 * You may se any data structure of your choosing to return the grouping of buddies.
 * Two Strings are "buddies" if 1) they are the same length, and the characters are equal distance from each other.
 * For example, "aaa" and "zzz" are buddies, but "aaa" would not be buddies with "abc"
 *
 * buddies can wrap around the alphabet. so "abcd" and "xyab" should be grouped together as buddies
 * if a string has no buddies in the input list, it should be returned in a a group by itself
 * a string can have multiple buddies. every string in the list could be buddies with each other
 */

/* two potential ways to interpret: first[0] -second[0] === first[1] - second[1] OR first[0] - first[1] === second[0] - second[1]

//attempt to solve it by first[0] - first[1] == second[0] -second[1]


create a hashmap: map the pattern to the entities 

calculate distances w/ the wrap included

**/

function findtheBuddies(arr) {
  function findDistanceBetweenCharacters(char1, char2) {
    //can assume characters will be from a-z
    const alphabetLength = 26;

    // Convert characters to ASCII values
    const charCode1 = char1.charCodeAt(0);
    const charCode2 = char2.charCodeAt(0);
    // calculate the forward and backward differences
    const forwardDifference =
      (charCode2 - charCode1 + alphabetLength) % alphabetLength;
    const backwardDifference =
      (charCode1 - charCode2 + alphabetLength) % alphabetLength;
    // return the smaller of the two differences
    return Math.min(forwardDifference, backwardDifference);
  }

  let buddies = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length == 1) {
      if (!buddies[0]) buddies[0] = [arr[i]];
      else buddies[0].push(arr[i]);
      //quick exits to the next index of arr
      continue;
    }
    //assumption is that distance between each characters aren't all equal. no guarenteed pattern. so will have to iterate through each position. o(n^2)
    let pattern = [];
    for (let j = 0; j < arr[i].length - 1; j++) {
      const firstChar = arr[i][j];
      const secondChar = arr[i][j + 1];
      pattern.push(findDistanceBetweenCharacters(firstChar, secondChar));
    }
    //separate pattern with a dash unless there is only one element in pattern
    pattern.join('$');
    if (!buddies[pattern]) buddies[pattern] = [arr[i]];
    else buddies[pattern].push(arr[i]);
  }
  console.log(buddies);
  return Object.values(buddies);
}

let input1 = ['xyz', 'yza', 'zab', 'aba'];
let result1 = findtheBuddies(input1); // expect [['xyz', 'yza', 'zab', 'aba']]
console.log(result1);
// expect [['xyz', 'yza', 'zab', 'aba']]

let input2 = ['aaa', 'bbb', 'ccc'];
let result2 = findtheBuddies(input2);
console.log(result2);
// expect [['aaa','bbb','ccc']]

let input3 = ['a', 'b', 'c', 'd', 'agz', 'kdpqmasd', 'bha'];
let result3 = findtheBuddies(input3);
console.log(result3);
// expect [['a','b','c','d'], ['agz', 'bha',], ['kdpqmasd']]

/**
 * Thought process was each list of characters will follow a certain pattern. I just have to create a hash map that matches the string to a pattern
 * all strings that follow the same pattern will be buddies
 * unique patterns will be stand alone
 */
