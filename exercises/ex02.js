// Create a function called removeBetween that removes all elements between two unique elements
// Make sure to implement the Stack principle (LIFO)

const Stack = require('../lib/Stack');

function removeBetween(stack, a, b) {
  const tempStack = new Stack();
  const keepStack = new Stack();

  let foundA = false;
  let foundB = false;

  while (!stack.isEmpty()) {
    tempStack.push(stack.pop());
  }

  while (!tempStack.isEmpty()) {
    const value = tempStack.pop();

    if (value === a) {
      foundA = true;
      keepStack.push(value);
      continue;
    }

    if (value === b) {
      foundB = true;
      keepStack.push(value);
      continue;
    }

    if (!foundA || foundB) {
      keepStack.push(value);
    }
  }

  while (!keepStack.isEmpty()) {
    stack.push(keepStack.pop());
  }
}

const fruits = new Stack();
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Cherry");
fruits.push("Date");
fruits.push("Elderberry");

removeBetween(fruits, "Banana", "Elderberry");
console.log(fruits.printStack()); // Apple Banana Elderberry