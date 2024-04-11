/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l1Nums = [],
    l2Nums = [];
  while (l1 || l2) {
    l1Nums.unshift(l1 ? l1.val : 0);
    l2Nums.unshift(l2 ? l2.val : 0);
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  let sum = (Number(l1Nums.join('')) + Number(l2Nums.join('')))
    .toString()
    .split('')
    .reverse();

  let dummyHead = new ListNode(0);
  let current = dummyHead;

  for (let i = 0; i < sum.length; i++) {
    current.next = new ListNode(Number(sum[i]));
    current = current.next;
  }
  return dummyHead.next;
};

/**
 * Initial attempt at solving this. problem with javascript is when you go above 9 trillion
 * javascript converts to scientific notation
 * as a result you acgtually have to go digit by digit instead
 *
 */

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let dummyHead = new ListNode(0);
  let current = dummyHead;

  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummyHead.next;
};
