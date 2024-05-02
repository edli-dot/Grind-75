var deleteMiddle = function (head) {
  if (!head || !head.next) return head.next;
  if (!head.next.next) {
    head.next = null;
    return head;
  }
  let slow = head;
  let fast = head.next.next; // Move fast two steps at a time, so slow will be at the middle node when fast reaches the end

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // delete the middle node
  slow.next = slow.next.next;

  return head;
};
