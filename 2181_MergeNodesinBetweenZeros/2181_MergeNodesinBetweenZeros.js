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
var mergeNodes = function (head) {
  let res = new ListNode();
  //this keeps the head of the answer we want
  let ans = res;
  let current = head.next;
  let total = 0;
  while (current) {
    if (current.val != 0) {
      total += current.val;
    } else {
      res.next = new ListNode(total);
      total = 0;
      res = res.next;
    }
    current = current.next;
  }
  return ans.next;
};
//a bit slower b/c this creates new ListNode

var mergeNodes = function (head) {
  let current = head;
  //this logic directly adds onto current.val
  while (current.next) {
    current.val += current.next.val;
    current.next = current.next.next;

    if (current.next.next === null) {
      current.next = null;
      return head;
    }
    //modifies the nodes w/ a val of 0 as the initial starting position to sum up
    if (current.next && current.next.val === 0) {
      current = current.next;
    }
  }
};
