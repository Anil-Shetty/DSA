/**
 * Represents a generic queue data structure.
 */
class Queue<T> {
  /**
   * An array to store elements of the queue.
   */
  #queue: T[];

  /**
   * The index of the front element in the queue.
   */
  #frontIndex: number;

  /**
   * The index where the next element will be added to the queue.
   */
  #backIndex: number;

  /**
   * Creates a new instance of the Queue class.
   */
  constructor() {
    this.#queue = [];
    this.#frontIndex = 0;
    this.#backIndex = 0;
  }

  /**
   * Adds an element to the back of the queue.
   * @param element The element to be added to the queue.
   * @returns A string indicating that the element is inserted.
   */
  enqueue(element: T) {
    this.#queue[this.#backIndex++] = element;
    return element + ' is inserted';
  }

  /**
   * Removes and returns the element from the front of the queue.
   * @returns The element removed from the front of the queue, or 'Queue is empty' if the queue is empty.
   */
  dequeue() {
    if (this.#queue.length === 0) {
      return 'Queue is empty';
    }

    return this.#queue.shift();
  }

  /**
   * Returns the element at the front of the queue without removing it.
   * @returns The element at the front of the queue.
   */
  peek() {
    return this.#queue[this.#frontIndex];
  }

  /**
   * Returns a string representation of the elements in the queue.
   * @returns A string containing all elements in the queue, separated by commas.
   */
  print() {
    return this.#queue.join(', ');
  }
}

// Example usage:
const queue = new Queue<number>(); // Create a queue for numbers
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.dequeue()); // Output: 10 (Front element removed)
console.log(queue.peek()); // Output: 20 (Front element without removal)
console.log(queue.print()); // Output: 20

