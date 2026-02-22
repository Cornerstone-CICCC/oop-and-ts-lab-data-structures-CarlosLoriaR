// Create a function called isPalindrome that checks if the elements in the queue form a palindrome
// A palindrome reads the same forwards and backwards (e.g., 1 2 3 2 1)
// Make sure to implement the Queue principle (FIFO)

const Queue = require('../lib/Queue');

function isPalindrome(queue) {
  const temp = [];
  const size = queue.size;

  for (let i = 0; i < size; i++) {
    const value = queue.dequeue();
    temp.push(value);
    queue.enqueue(value);
  }

  let left = 0;
  let right = temp.length - 1;

  while (left < right) {
    if (temp[left] !== temp[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

console.log(isPalindrome(queue));