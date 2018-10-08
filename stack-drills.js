'use strict';

const { Stack } = require('./stack');

const starTrek = new Stack();
let data = ['Kirk', 'Spock', 'McCoy', 'Scotty'];
for (let i in data) {
  starTrek.push(data[i]);
}

console.log('starTrek', JSON.stringify(starTrek));
