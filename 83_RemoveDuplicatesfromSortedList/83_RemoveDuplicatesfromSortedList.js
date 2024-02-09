/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let current = head;
  // Iterate through the linked list
  while (current != null && current.next != null) {
    if (current.val == current.next.val)
      //if dupped value, skip node
      current.next = current.next.next;
    else {
      current = current.next; // Move to the next node
    }
  }
  return head; // Return the head of the updated linked list
};
