/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    // make new node from val
    // think about when LL is empty - LL.head & LL.tail = newNode
    // update tails next on LL 
    // set newNode.next to null 

    const newNode = new Node(val); // next defaults to null 
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1
    return
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    // make new node, with next of current head
    // set head to newNode 

    const newNode = new Node(val, this.head);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head = newNode;
    }
    this.length += 1;
    return;
  }

  /** pop(): return & remove last item. */

  pop() {
    // save this.tail to lastNode
    // for each node, if current.next = lastNode
    // set current.next to null

    // if LL empty throw err
    if (!this.head) {
      throw new RangeError;
    }

    const lastNode = this.tail;
    // if only one item in LL, remove and return 
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return lastNode.val;
    }
    
    // look through LL to find last item, remove & return
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next === lastNode) {
        currentNode.next = null;
        this.tail = currentNode;
      }
    }
    this.length -= 1;
    return lastNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    // check if LL length >= 1
    // assign fistNode
    // if only item in LL, remove and return
    // reassign this.head to this.head.next
    // return firstNode 

    // if LL empty throw err
    if (!this.head) {
      throw new RangeError;
    }

    const firstNode = this.head
    // if only one item in LL, remove & return
    if(this.length===1){
      this.head = null;
      this.tail = null; 
      this.length -= 1;
      return firstNode.val;
    }
    this.head = this.head.next;
    this.length -= 1;

    return firstNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
