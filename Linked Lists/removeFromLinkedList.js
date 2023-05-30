class ListNode {
  val;
  next;

  constructor(val, next = null) {
    this.val = val;
    this.next = next ? next : null;
  }
}

function removeElements(head, val) {
  if (!head || !head.val) return null;
  if (head.val === val) {
    head = head.next;
  } else if (head.next.val === val) {
    if (head.next.next) {
      head.next = head.next.next;
    } else {
      head.next = null;
    }
  }
}

let head = new ListNode(0);
let val1 = new ListNode(4);
let val2 = new ListNode(3);
let val3 = new ListNode(8);
let val4 = new ListNode(7);

head.next = val1;
head.next.next = val2;
head.next.next.next = val3;
head.next.next.next.next = val4;

let node = removeElements(head, 3);

while (node) {
  console.log(node.val);
  node = node.next;
}
