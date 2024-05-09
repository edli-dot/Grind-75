/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let count = 0;
  let current = list1;
  let endOfRemove = list1;
  while (count < b) {
    count++;
    if (count < a) {
      current = current.next;
    }
    if (count == b) {
      endofRemove = endOfRemove.next;
    }
    endOfRemove = endOfRemove.next;
  }
  current.next = list2;
  let tailofList2 = list2;
  while (tailofList2.next) {
    tailofList2 = tailofList2.next;
  }
  tailofList2.next = endOfRemove.next;
  return list1;
};
