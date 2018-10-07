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

module.exports = { Stack };
