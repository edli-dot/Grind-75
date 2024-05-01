var swapPairs = function (head) {
  // check if the list is empty or has only one node
  if (!head || !head.next) return head;

  let dummy = new ListNode(0);
  //this maintains the head that we want to return as the answer
  dummy.next = head;
  let prev = dummy;

  while (head && head.next) {
    //the two pointers that we want to swap
    let first = head;
    let second = head.next;

    //swapping the pointers
    prev.next = second;
    first.next = second.next;
    second.next = first;
    //continues the while loop
    prev = first;
    head = first.next;
  }
  //returns the top of the modified list which would be the original head
  return dummy.next; // Return the new head after swapping
};
