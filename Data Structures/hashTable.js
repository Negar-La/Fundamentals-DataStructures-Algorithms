// Creating a hash table using an object in JavaScript

// Example 1: Creating a hash table with initial values
const items1 = {
  key1: 1,
  key2: 2,
  key3: "three",
};

console.log(items1); // Print the contents of items1

// Example 2: Creating a hash table and adding items progressively
const items2 = {};

// Adding items to the hash table
items2.key1 = 1;
items2.key2 = 2;
items2.key3 = 3;
items2.key4 = 4;

console.log(items2); // Print the contents of items2

// Trying to access a nonexistent key
console.log(items1.key6); // This will print undefined

// Replacing a value for an existing key
items2.key2 = "two";
console.log(items2); // Print the updated contents of items2

// Iterating over the hash table
for (const key in items2) {
  if (items2.hasOwnProperty(key)) {
    console.log("Key:", key, "Value:", items2[key]);
  }
}
