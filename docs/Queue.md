## Queue Data Structure in TypeScript

This document describes a `Queue` class implemented in TypeScript. The queue follows the First-In-First-Out (FIFO) principle, where the element added first is the first element retrieved. The queue can store elements of any generic type `T`.

**Components:**

- **Queue<T> class:** Represents the queue itself. It utilizes an internal array `#queue` to store the elements with two indexes for tracking the front and back of the queue.
  - **Private Properties:**
    - `#queue: T[]`: An array that holds the elements in the queue.
    - `#frontIndex: number`: Tracks the index of the first element (front) in the queue.
    - `#backIndex: number`: Tracks the index where the next element will be inserted (back) in the queue.
  - **Methods:**
    - `constructor()`: Initializes an empty queue by creating a new empty array and setting both `#frontIndex` and `#backIndex` to 0.
    - `enqueue(element: T)`: Adds a new element to the back of the queue. It utilizes the `#backIndex` to access the appropriate position in the internal array and assigns the element. It also increments `#backIndex` to reflect the new back position. The method returns a success message with the inserted element.
    - `dequeue()`: Removes and returns the element at the front of the queue. It checks for an empty queue and returns "Queue is empty" if there are no elements. Otherwise, it uses the `shift` method of the internal array to remove the first element and decrement `#frontIndex` to maintain the front position.
    - `peek()`: Returns the element at the front of the queue without removing it. It accesses the element using the `#frontIndex` in the internal array.
    - `print()`: Returns a string representation of the queue elements, comma-separated. It utilizes the `join` method of the internal array to achieve this.

**Example Usage:**

```typescript
const queue = new Queue<number>(); // Create a queue for numbers
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.dequeue()); // Output: 10 (Front element removed)
console.log(queue.peek()); // Output: 20 (Front element without removal)
console.log(queue.print()); // Output: 20
```
