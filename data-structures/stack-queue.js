// Stack using an array
const stack = [];

// Push items onto the stack
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

// Print the current stack
console.log("Stack:", stack);

// Pop an item from the stack
const poppedItem = stack.pop();
console.log("Popped item:", poppedItem);
console.log("Updated stack:", stack);

// Queue using an array
const queue = [];

// Enqueue items into the queue
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);

// Print the current queue
console.log("Queue:", queue);

// Dequeue an item from the queue
const dequeuedItem = queue.shift();
console.log("Dequeued item:", dequeuedItem);
console.log("Updated queue:", queue);
