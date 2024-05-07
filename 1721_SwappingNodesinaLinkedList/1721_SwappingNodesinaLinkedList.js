/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let nums = [];
  while (head) {
    nums.push(head.val);
    head = head.next;
  }

  [nums[k - 1], nums[nums.length - k]] = [nums[nums.length - k], nums[k - 1]];
  let ans = new ListNode();
  let curr = ans;
  for (let num of nums) {
    curr.next = new ListNode(num);
    curr = curr.next;
  }
  return ans.next;
};

//note the most efficient method. needs extra space for the array.
