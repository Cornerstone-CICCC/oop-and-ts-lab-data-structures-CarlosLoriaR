// Create a function called mixQueue that rearranges the queue so that the first half is interleaved/mixed with the second half
// For example: 1 2 3 4 5 6 becomes 1 4 2 5 3 6
// Make sure to implement the Queue principle (FIFO)

const Queue = require('../lib/Queue');

function mixQueue(queue) {
  const size = queue.size();
  if (size <= 1) return;

  const half = Math.floor(size / 2);
  const firstHalf = [];

  for (let i = 0; i < half; i++) {
    firstHalf.push(queue.dequeue());
  }

  const mixed = [];
  while (firstHalf.length > 0) {
    mixed.push(firstHalf.shift());
    if (!queue.isEmpty()) {
      mixed.push(queue.dequeue());
    }
  }

  for (let i = 0; i < mixed.length; i++) {
    queue.enqueue(mixed[i]);
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

mixQueue(queue);
console.log(queue.printQueue()); // Output: 1 4 2 5 3 6