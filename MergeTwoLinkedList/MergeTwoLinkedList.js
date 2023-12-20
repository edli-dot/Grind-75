/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) return list1;
  if (!list1) return list2;
  if (!list2) return list1;

  //need to compare position
  list3 = new ListNode();
  while (list1 && list2) {
    let current = list1;
    let current2 = list2;
    if (list1.val <= list2.val || !list2.val) {
      list3.next = list1.val;
      current = list1.next;
    } else if (list2.val <= list1.val || !list1.val) {
      list3.next = list2.val;
      current2 = list2.next;
    }
    return list3;
  }
  return list3;
};
