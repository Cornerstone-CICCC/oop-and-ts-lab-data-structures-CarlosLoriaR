// Create a function called insertAfterTarget that inserts a new element after a target element
// Make sure to implement the Stack principle (LIFO)

const Stack = require('../lib/Stack');

function insertAfterTarget(stack, target, newElement) {
  const tempStack = new Stack();

  while (!stack.isEmpty()) {
    tempStack.push(stack.pop());
  }

  while (!tempStack.isEmpty()) {
    const value = tempStack.pop();
    stack.push(value);

    if (value === target) {
      stack.push(newElement);
    }
  }
}

const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");

insertAfterTarget(stack, "B", "X");
console.log(stack.printStack()); // A B X C D