/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    const [type, color, name1] = items[i];
    if (
      (ruleKey == 'type' && ruleValue == type) ||
      (ruleKey == 'color' && ruleValue == color) ||
      (ruleKey == 'name' && ruleValue == name1)
    )
      count++;
  }
  return count;
};
