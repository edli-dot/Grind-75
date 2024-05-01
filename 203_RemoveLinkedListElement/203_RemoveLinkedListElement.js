/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) return head;
  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  while (head) {
    //in event node value matches what we want to delete
    if (head.val == val) {
      head = head.next;
      prev.next = head;
    } else {
      const temp = head;
      head = head.next;
      prev = temp;
    }
  }
  return dummy.next;
};

/**
 * concept is just like two pointer. one that tracks the previous node
 * essentially two pointer linked list problem
 */
