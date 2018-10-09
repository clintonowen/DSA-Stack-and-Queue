'use strict';

const { Queue, peek, display } = require('./queue');

(function main() {
  const starTrekQ = new Queue();
  const starTrekData = ['Kirk', 'Spock', 'Uhura', 'Sulu', 'Checkov'];
  for (let i in starTrekData) {
    starTrekQ.enqueue(starTrekData[i]);
  }
  console.log(starTrekQ);
  // console.log(peek(starTrekQ));
  display(starTrekQ);
})();
