'use strict';

const { Stack, peek, display } = require('./stack');

const starTrek = new Stack();
let data = ['Kirk', 'Spock', 'McCoy', 'Scotty'];
for (let i in data) {
  starTrek.push(data[i]);
}

console.log('peek(starTrek) =', peek(starTrek));

// console.log('starTrek =', JSON.stringify(starTrek));

display(starTrek);
