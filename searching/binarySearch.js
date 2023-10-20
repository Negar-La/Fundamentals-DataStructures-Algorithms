// Define a sorted array of numbers
const itemList = [5, 12, 23, 41, 57, 68, 87, 92, 101, 123];

// Function to perform a binary search
function binarySearch(itemToFind, list) {
  let lower = 0; // Initialize the lower index
  let upper = list.length - 1; // Initialize the upper index

  //the while loop will execute for as long as two indexes dont cross over each other
  //in which case we know that the value does not exist.
  while (lower <= upper) {
    const midpoint = Math.floor((lower + upper) / 2);

    if (list[midpoint] === itemToFind) {
      return `Item ${itemToFind} found at position ${midpoint}`; // Item found, return its index
    } else if (list[midpoint] < itemToFind) {
      lower = midpoint + 1; // Adjust lower index to midpoint + 1
    } else {
      upper = midpoint - 1; // Adjust upper index
    }
  }

  return `Item ${itemToFind} not found`; // Item not found - two indexes have crossed each other
}

// Test the binarySearch function
console.log(binarySearch(23, itemList));
console.log(binarySearch(87, itemList));
console.log(binarySearch(250, itemList));
