/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head || n == 0) return head;
  if (!head.next && n == 1) return null;
  let ans = head;
  let fast = head;
  let slow = head;
  while (n > 0 && fast.next) {
    fast = fast.next;
    n--;
  }
  if (n > 0) return slow.next;
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  if (slow.next) {
    slow.next = slow.next.next;
  } else slow.next = null;

  return ans;
};
