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
function reverseList(head) {
  let previous = null;
  let current = head;

  while (current !== null) {
    //this serves as a temporary variable to keep where the node's connection whom we are breaking
    let nextNode = current.next;
    //this portion is just reversing the direciton of the LL
    current.next = previous;
    //change the positions of our pointers
    previous = current;
    current = nextNode;
  }

  return previous;
}

/**
 * This is fundamental to a lot of linked list problems
 * just a simple two pointer situation
 */
