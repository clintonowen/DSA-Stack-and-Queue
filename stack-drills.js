'use strict';

const { Stack, peek, display } = require('./stack');

// const starTrek = new Stack();
// let data = ['Kirk', 'Spock', 'McCoy', 'Scotty'];
// for (let i in data) {
//   starTrek.push(data[i]);
// }

// console.log('peek(starTrek) =', peek(starTrek));
// console.log('starTrek =', JSON.stringify(starTrek));

// Remove `McCoy` from the stack
// let tempData = new Stack();
// let item = starTrek.pop();
// while (item !== 'McCoy') {
//   tempData.push(item);
//   item = starTrek.pop();
// }
// item = tempData.pop();
// while (item) {
//   starTrek.push(item);
//   item = tempData.pop();
// }

// display(starTrek);

// function is_palindrome(str) {
//   str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
//   const strStack = new Stack();
//   for (let i = 0; i < str.length; i++) {
//     strStack.push(str[i]);
//   }
//   let newStr = '';
//   let char = strStack.pop();
//   while (char) {
//     newStr += char;
//     char = strStack.pop();
//   }
//   return (str === newStr);
// }

// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));

function isBalanced(exp) {
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  const open = new Stack();
  for (let i = 0; i < exp.length; i++) {
    let char = exp[i];
    if (char === '(' || char === '{' || char === '[') {
      open.push({'type': char, i});
    } else if (char === ')' || char === '}' || char === ']') {
      let openChar = open.pop();
      if (!openChar || brackets[openChar.type] !== char) {
        return `Imbalanced expression! Error at index ${i}.`;
      }
    }
  }
  let rem = open.pop();
  if (rem) {
    return `Imbalanced expression! Error at index ${rem.i}.`;
  }
  return 'Expression is balanced.';
}

console.log(isBalanced('5+(3/(2-1))'));
console.log(isBalanced('5+)3/(2-1))'));
console.log(isBalanced('5+(3/(2-1)))'));
console.log(isBalanced('(5+(3/(2-1))'));

console.log(isBalanced('[5+(3/(2-{1}))]'));
console.log(isBalanced('[5+(3/(2-{1)})]'));
console.log(isBalanced('5+(3/(2-{1}))]'));
console.log(isBalanced('[5+{(3/(2-{1}))]'));
console.log(isBalanced('([)]'));
