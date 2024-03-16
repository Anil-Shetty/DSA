## Stack Data Structure in TypeScript

This document describes a `Stack` class implemented in TypeScript. The stack follows the Last-In-First-Out (LIFO) principle, where the element added last is the first element retrieved. The stack can store elements of any generic type `T`.

**Components:**

- **Stack<T> class:** Represents the stack itself. It utilizes an internal array `#items` to store the elements.
  - **Private Property:**
    - `#items: T[]`: An array that holds the elements in the stack.
  - **Methods:**
    - `constructor()`: Initializes an empty stack by creating a new empty array.
    - `push(element: T)`: Adds a new element to the top of the stack. It utilizes the `push` method of the internal array to achieve this.
    - `pop()`: Removes and returns the element at the top of the stack. It checks for an underflow condition (empty stack) and returns "underflow" if the stack is empty. Otherwise, it uses the `pop` method of the internal array to remove and return the top element.
    - `peek()`: Returns the element at the top of the stack without removing it. It accesses the last element of the internal array using its length property.
    - `print()`: Returns a string representation of the stack elements, comma-separated. It utilizes the `join` method of the internal array to achieve this.

**Example Usage:**

```typescript
const stack = new Stack<number>(); // Create a stack for numbers
stack.push(10);
stack.push(20);
console.log(stack.pop()); // Output: 20 (Top element removed)
console.log(stack.peek()); // Output: 10 (Top element without removal)
console.log(stack.print()); // Output: 10
```
