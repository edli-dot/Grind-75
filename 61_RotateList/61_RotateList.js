var rotateRight = function (head, k) {
  if (!head || k === 0) return head;

  let count = 1;
  let curr = head;
  let prev = null;

  while (curr.next) {
    prev = curr;
    curr = curr.next;
    count++;
  }

  // if k is a multiple of the list length, no rotation is needed
  if (k % count === 0) return head;

  let rotations = k % count;

  // connect the last node to the head, makes the list circular
  curr.next = head;

  let newTail = head;
  for (let i = 0; i < count - rotations - 1; i++) {
    newTail = newTail.next;
  }

  let newHead = newTail.next;
  newTail.next = null;

  return newHead;
};

/**
 * In this sort of problems where we are rotating the entire thing, first thing would be
 * to check the length of the array or LL and see how many rotates you need besides full rotaitons
 *
 * rotations % length
 *
 * then rotate just the remainder
 *
 * for linked list we can make it circular and just modify the tail and head
 */
