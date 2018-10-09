'use strict';

const { Stack } = require('./stack');

class Queue2 {
  constructor() {
    this.stackA = null;
    this.stackB = new Stack();
  }
  
  enqueue(data) {
    this.stackB.push(data);
    this.stackA = new Stack();
    let currNode = this.stackB.top;
    while (currNode) {
      this.stackA.push(currNode.data);
      currNode = currNode.next;
    }
  }

  dequeue() {
    if (!this.stackA.top) {
      return null;
    } else {
      this.stackA.pop();
      this.stackB = new Stack();
      let currNode = this.stackA.top;
      while (currNode) {
        this.stackB.push(currNode.data);
        currNode = currNode.next;
      }
    }
  }
}

function displayQ2(q2) {
  console.log('Displaying queue:');
  let node = q2.stackA.top;
  while (node !== null) {
    console.log(node.data);
    node = node.next;
  }
}

module.exports = { Queue2, displayQ2 };
