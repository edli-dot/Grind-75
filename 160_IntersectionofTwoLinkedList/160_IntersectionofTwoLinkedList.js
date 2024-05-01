var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  if (headA === headB) return headA;

  const nodeSet = new Set();

  //iterates through first linkedlist and adds unique values
  let curr = headA;
  while (curr) {
    nodeSet.add(curr);
    curr = curr.next;
  }
  curr = headB;
  //iterates through second linkedlist to see if we see a common value
  //set has a lookup time of (1)
  while (curr) {
    if (nodeSet.has(curr)) return curr;
    curr = curr.next;
  }
  // no intersection found
  return null;
};
