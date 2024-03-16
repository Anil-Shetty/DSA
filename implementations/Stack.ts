/**
 * Represents a generic stack data structure.
 */
class Stack<T> {
  /**
   * The array to store elements of the stack.
   */
  #items: T[];

  /**
   * Creates a new instance of the Stack class.
   */
  constructor() {
    this.#items = [];
  }

  /**
   * Adds an element to the top of the stack.
   * @param element The element to be added to the stack.
   */
  push(element: T) {
    this.#items.push(element);
  }

  /**
   * Removes and returns the element from the top of the stack.
   * @returns The element removed from the top of the stack, or 'underflow' if the stack is empty.
   */
  pop() {
    if (this.#items.length === 0) {
      return 'underflow';
    }

    return this.#items.pop();
  }

  /**
   * Returns the element at the top of the stack without removing it.
   * @returns The element at the top of the stack.
   */
  peek() {
    return this.#items[this.#items.length - 1];
  }

  /**
   * Returns a string representation of the elements in the stack.
   * @returns A string containing all elements in the stack, separated by commas.
   */
  print() {
    return this.#items.join(', ')
  }
}

// Example usage:
const stack = new Stack<number>(); // Create a stack for numbers
stack.push(10);
stack.push(20);
console.log(stack.pop()); // Output: 20 (Top element removed)
console.log(stack.peek()); // Output: 10 (Top element without removal)
console.log(stack.print()); // Output: 10

