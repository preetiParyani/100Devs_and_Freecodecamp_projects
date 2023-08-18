// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   append(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//     } else {
//       let current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = newNode;
//     }
//   }
//   remove(data) {
//     if (!this.head) {
//       return;
//     }

//     if (this.head.data === data) {
//       this.head = this.head.next;
//       return;
//     }

//     let current = this.head;
//     let prev = null;

//     while (current) {
//       if (current.data === data) {
//         prev.next = current.next;
//         return;
//       }
//       prev = current;
//       current = current.next;
//     }
//   }

//   display() {
//     let current = this.head;
//     while (current) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }

// // Test cases
// const linkedList = new LinkedList();

// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);

// linkedList.display();
// linkedList.remove(2);

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  printList() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  reverseList() {
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode !== null) {
      const nextNode = currentNode.next;
      currentNode.next = previousNode;
      currentNode.prev = nextNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }

    this.head = previousNode;
    this.tail = currentNode;
  }
}

class CircularLinkedList extends DoublyLinkedList {
  constructor() {
    super();
    this.tail.next = this.head;
    this.head.prev = this.tail;
  }
}

const dll = new DoublyLinkedList();
dll.addNode(1);
dll.addNode(2);
dll.addNode(3);
dll.printList();
dll.reverseList();
dll.printList();

const cllist = new CircularLinkedList();
cllist.addNode(1);
cllist.addNode(2);
cllist.addNode(3);
cllist.printList();
cllist.reverseList();
cllist.printList();

// //general way without classes to declare linked lists using a variable with nested objects.
// const List = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null,
//         },
//       },
//     },
//   },
// };

// //class way

// class ListNode {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor(head = null) {
//     this.head = head;
//   }
// }
// function getCount() {
//   let count = 0;
//   let node = list.head;
//   while (node) {
//     count++;
//     node = node.next;
//   }
//   return count;
// }

// let node1 = new ListNode(2);
// let node2 = new ListNode(4);
// let node3 = new ListNode(6);

// node1.next = node2; //link the nodes together in memory
// node2.next = node3;
// let list = new LinkedList(node1);

// console.log("linked list", node1.data);
// console.log(list);
// // console.log(LinkedList.head.next);
// console.log(getCount());
