var swapPairs = function (head) {
  // check if the list is empty or has only one node
  if (!head || !head.next) return head;

  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  while (head && head.next) {
    let first = head;
    let second = head.next;

    prev.next = second;
    first.next = second.next;
    second.next = first;

    prev = first;
    head = first.next;
  }
  return dummy.next; // Return the new head after swapping
};
