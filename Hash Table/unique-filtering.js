const items = [
  "apple",
  "banana",
  "cherry",
  "apple",
  "banana",
  "apple",
  "apple",
  "date",
  "cherry",
  "cherry",
];

// Create a hash table (in JavaScript, an object) to store unique items
const uniqueItems = {};

// Loop over each item in the list
for (const item of items) {
  // Add the item as a key in the hash table with an unused value (e.g., 0)
  uniqueItems[item] = 0;
}

// Create a set of unique items from the hash table keys
const result = new Set(Object.keys(uniqueItems));

// Convert the set back to an array if needed
const uniqueItemsArray = Array.from(result);

console.log(result);
console.log(uniqueItemsArray);

//Linear time complexity O(n)
