'use strict';

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(item) {
    if (!this.top) {
      this.top = new _Node(item, null);
      return this.top;
    } else {
      const node = new _Node(item, this.top);
      this.top = node;
      return this.top;
    }
  }

  pop() {
    if (!this.top) {
      return;
    } else {
      const item = this.top;
      this.top = item.next;
      return item.data;
    }
  }
}

function peek(stack) {
  if (!stack.top) {
    return;
  } else {
    return stack.top.data;
  }
}

function display(stack) {
  let node = stack.top;
  while (node !== null) {
    console.log(node.data);
    node = node.next;
  }
}

module.exports = { Stack, peek, display };
