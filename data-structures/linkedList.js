// Define a Node class to represent a node in a linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Define a LinkedList class to represent a linked list
class LinkedList {
  constructor() {
    this.head = null; // Initialize the head of the linked list to null
    this.count = 0; // Initialize the count of nodes to 0
  }

  // Function to insert a new node with the given value
  //For simplicity, we're only going to insert items at the head of the list.
  insert(value) {
    const newNode = new Node(value); // Create a new node
    if (!this.head) {
      this.head = newNode; // If the list is empty, set the new node as the head
    } else {
      newNode.next = this.head; // Set the next of the new node to the current head
      this.head = newNode; // Update the head to the new node
    }
    this.count++;
  }

  // Function to find a node with the given value
  find(value) {
    let currentNode = this.head; // Start from the head of the list
    while (currentNode !== null) {
      if (currentNode.value === value) {
        // Return the node if the value matches
        return currentNode;
      }
      currentNode = currentNode.next; // Move to the next node
    }
    return null; // Return null if the value is not found
  }

  // Function to delete a node at the given index
  deleteAt(index) {
    if (index >= this.count) {
      return; // Index out of bounds, do nothing
    }

    if (index === 0) {
      this.head = this.head.next; // If index is 0, we're removing the head node and we need to set a new head node
    } else {
      let tempIndex = 0;
      let currentNode = this.head;
      while (tempIndex < index - 1) {
        //we want the node that is right before the one that we're deleting
        currentNode = currentNode.next;
        tempIndex++;
      }
      currentNode.next = currentNode.next.next; // set its next field to point to the node that's after the one we want to delete
    }

    this.count--; // Decrement the node count
  }

  // Function to print the values of the linked list
  dumpList() {
    let currentNode = this.head; // Start from the head
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log("Node count:", this.count); // Print the node count
  }
}

// Create a linked list instance
const linkedList = new LinkedList();

// Insert items

linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(4);

// Print the list
linkedList.dumpList();

// // // Delete item at index 1
linkedList.deleteAt(1);

// // // Print the modified list
linkedList.dumpList();

// // Find an item with a given value
const foundNode = linkedList.find(4);
console.log("Node found:", foundNode);

// Modify the logging logic to print the node values
console.log("Node found:", foundNode.value);
let nextNode = foundNode.next;
while (nextNode !== null) {
  console.log("Next node value:", nextNode.value);
  nextNode = nextNode.next;
}
