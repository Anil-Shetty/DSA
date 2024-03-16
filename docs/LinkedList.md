## Singly Linked List in TypeScript

This document describes a Singly Linked List data structure implemented in TypeScript. The list can store elements of any generic type `T`.

**Components:**

- **Pointer<T> type:** An alias representing a pointer in the list. It can be either a reference to an `LNode<T>` instance or null.
- **LNode<T> class:** Represents a single node in the list. It has two properties:
  - `element: T`: The data element stored in the node.
  - `next: Pointer<T>`: A reference to the next node in the list, or null if it's the last node.
- **LinkedList<T> class:** Represents the linked list itself. It has properties and methods to manage the list elements:
  - `#head: Pointer<T> = null`: A private reference to the head node of the list, or null if the list is empty.
  - `size: number = 0`: The number of elements currently in the list.
  - **Methods:**
    - `add(element: T)`: Adds a new element to the end of the list.
    - `insertAt(element: T, index: number)`: Inserts a new element at the specified index in the list.
    - `remove()`: Removes the last element from the list.
    - `removeFrom(index: number)`: Removes the element at the specified index from the list.
    - `removeElement(element: T)`: Removes the first occurrence of the given element from the list.
    - `print()`: Prints all the elements in the list as a comma-separated string.

**Explanation of Methods:**

- `add(element: T)`: Creates a new `LNode` with the provided element and appends it to the end of the list. It iterates through the existing nodes to find the last one and updates its `next` pointer to the new node. The `size` property is incremented.
- `insertAt(element: T, index: number)`: Inserts a new element at the specified index in the list. It performs checks for invalid indices and handles edge cases like inserting at the head (index 0). It iterates to the node before the insertion point and updates pointers to insert the new node. The `size` property is incremented.
- `remove()`: Removes the last element from the list. It checks for an empty list and handles the case with a single element. It iterates to the second-last node and sets its `next` pointer to null, effectively removing the last element. The `size` property is decremented.
- `removeFrom(index: number)`: Removes the element at the specified index from the list. It performs checks for invalid indices. It iterates to the node before the element to be removed and updates pointers to skip the removed node. The `size` property is decremented.
- `removeElement(element: T)`: Removes the first occurrence of the given element from the list. It iterates through the list and checks each node's element for a match. If a match is found, it updates pointers to remove the node. The `size` property is decremented upon successful removal. It returns -1 if the element is not found.
- `print()`: Iterates through the list and collects all elements into an array. It then joins the elements in the array with commas and returns the resulting string representation of the list.

**Example Usage:**

```typescript
const list = new LinkedList<number>();
list.add(10);
list.add(20);
list.insertAt(30, 1);
console.log(list.print()); // Output: 10, 30, 20
```
