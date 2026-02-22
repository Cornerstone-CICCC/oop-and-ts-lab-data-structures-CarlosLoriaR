// Create a function called calcDistance that calculates the distance between two unique elements
// Make sure to implement Stack principle (LIFO)

const Stack = require('../lib/Stack')

function calcDistance(stack, a, b) {
  const tempStack = new Stack()
  let indexA = -1
  let indexB = -1
  let position = 0

  while (!stack.isEmpty()) {
    const value = stack.pop()
    tempStack.push(value)

    if (value === a) indexA = position
    if (value === b) indexB = position

    position++
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop())
  }

  if (indexA === -1 || indexB === -1) return -1
  return Math.abs(indexA - indexB)
}

// Ejemplo
const students = new Stack()
students.push("John")
students.push("Joe")
students.push("Jane")
students.push("Jill")
students.push("Jim")

console.log(calcDistance(students, "Joe", "Jim"))   // 3
console.log(calcDistance(students, "Joe", "Jill"))  // 2