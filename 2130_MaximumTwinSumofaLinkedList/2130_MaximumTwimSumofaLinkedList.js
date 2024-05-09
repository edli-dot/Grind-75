/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let slow = head;
  let fast = head.next;
  if (!fast.next) {
    return head.val + head.next.val;
  }
  let max = 0;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  function reverseLinkedList(head) {
    let previous = null;
    let current = head;

    while (current !== null) {
      let nextNode = current.next;
      current.next = previous;
      previous = current;
      current = nextNode;
    }
    return previous;
  }
  let reversedHead = reverseLinkedList(slow.next);
  slow = head;
  while (slow && reversedHead) {
    const pair = slow.val + reversedHead.val;
    max = Math.max(max, pair);
    slow = slow.next;
    reversedHead = reversedHead.next;
  }
  return max;
};

/**
 * Used a helper function to reverse the LL
 * time complexity of o(n)
 *
 * logic to find middle of Linked list w/ slow and fast pointer
 * reverse the second half of the linked list
 * add two values together and compare it to the maximum
 */
