'use strict';

const { Queue, peek, display } = require('./queue');
const { Queue2, displayQ2 } = require('./queue-2stacks');

(function main() {
  const starTrekQ = new Queue();
  const starTrekData = ['Kirk', 'Spock', 'Uhura', 'Sulu', 'Checkov'];
  for (let i in starTrekData) {
    starTrekQ.enqueue(starTrekData[i]);
  }
  // console.log(starTrekQ);

  // console.log(peek(starTrekQ));

  // display(starTrekQ);

  // remove 'Spock' from the queue
  // const holdQ = new Queue();
  // let nodeVal = starTrekQ.dequeue();
  // while (nodeVal) {
  //   if (nodeVal !== 'Spock') {
  //     holdQ.enqueue(nodeVal);
  //   }
  //   nodeVal = starTrekQ.dequeue();
  // }
  // nodeVal = holdQ.dequeue();
  // while (nodeVal) {
  //   starTrekQ.enqueue(nodeVal);
  //   nodeVal = holdQ.dequeue();
  // }
  // display(starTrekQ);

  const starTrekQ2 = new Queue2();
  for (let i in starTrekData) {
    starTrekQ2.enqueue(starTrekData[i]);
  }
  displayQ2(starTrekQ2);
  starTrekQ2.dequeue();
  displayQ2(starTrekQ2);
  starTrekQ2.enqueue('Kirk');
  displayQ2(starTrekQ2);
})();
