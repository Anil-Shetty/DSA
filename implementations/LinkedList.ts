/**
 * Represents a pointer to a linked list node.
 */
type Pointer<T> = LNode<T> | null;

/**
 * Represents a node in a linked list.
 */
class LNode<T> {
  /**
   * The value stored in the node.
   */
  element: T;

  /**
   * A reference to the next node in the list.
   */
  next: Pointer<T>;

  /**
   * Creates a new node with the specified element.
   * @param element The element to store in the node.
   */
  constructor(element: T) {
    this.element = element;
    this.next = null;
  }
}

/**
 * Represents a linked list data structure.
 */
class LinkedList<T> {
  /**
   * The pointer to the head node of the list.
   */
  #head: Pointer<T> = null;

  /**
   * The number of elements in the list.
   */
  size: number = 0;

  /**
   * Adds an element to the end of the list.
   * @param element The element to add to the list.
   */
  add(element: T) {
    const node = new LNode(element);

    if (!this.#head) {
      this.#head = node;
      return;
    }

    let currentNode = this.#head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;

    this.size++;
  }

  /**
   * Inserts an element at the specified index in the list.
   * @param element The element to insert into the list.
   * @param index The index at which to insert the element.
   */
  insertAt(element: T, index: number) {
    if (index < 0 || index > this.size) {
      console.error('Invalid index');
      return;
    }

    const node = new LNode(element);

    if (index === 0) {
      node.next = this.#head;
      this.#head = node;
    } else {
      let prevNode = this.#head!;
      let currentNode = prevNode.next;
      let counter = 1;

      while (counter < index) {
        prevNode = currentNode!;
        currentNode = prevNode.next;
        counter++;
      }

      prevNode.next = node;
      node.next = currentNode;
    }

    this.size++;
  }

  /**
   * Removes the last element from the list.
   */
  remove() {
    if (!this.#head) {
      console.error("List is empty");
      return;
    }

    if (!this.#head.next) {
      this.#head = null;
    } else {
      let prevNode = this.#head;
      let currentNode = prevNode.next!;

      while (currentNode.next) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }

      prevNode.next = null;
    }

    this.size--;
  }

  /**
   * Removes the element at the specified index from the list.
   * @param index The index of the element to remove.
   */
  removeFrom(index: number) {
    if (index < 0 || index >= this.size) {
      console.error("Invalid index");
      return;
    }

    if (index === 0) {
      this.#head = this.#head?.next ?? null;
    } else {
      let prevNode = this.#head!;
      let currentNode = prevNode.next;
      let counter = 1;

      while (counter < index) {
        prevNode = currentNode!;
        currentNode = prevNode.next;
        counter++;
      }

      prevNode.next = currentNode!.next;
    }

    this.size--;
  }

  /**
   * Removes the first occurrence of the specified element from the list.
   * @param element The element to remove from the list.
   * @returns The removed element, or -1 if the element was not found.
   */
  removeElement(element: T) {
    let prevNode: Pointer<T> = null;
    let currentNode = this.#head;

    while (currentNode) {
      if (currentNode.element === element) {
        if (!prevNode) {
          this.#head = currentNode.next;
        } else {
          prevNode.next = currentNode.next;
        }

        this.size--;
        return currentNode.element;
      }

      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    return -1;
  }

  /**
   * Returns a string representation of the list.
   * @returns A string representation of the elements in the list.
   */
  print() {
    let items: T[] = [];
    let currentNode = this.#head;

    while (currentNode) {
      items.push(currentNode.element);
      currentNode = currentNode.next;
    }

    return items.join(', ');
  }
}

// Example usage:
const list = new LinkedList<number>();
list.add(10);
list.add(20);
list.insertAt(30, 1);
console.log(list.print()); // Output: 10, 30, 20

