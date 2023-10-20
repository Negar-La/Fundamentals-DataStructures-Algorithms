// Jump Search function
const jumpSearch = (arr, x) => {
  const n = arr.length;
  // Finding block size to be jumped
  let step = Math.floor(Math.sqrt(n)); //calculates the square root of n, and rounds down the result to the nearest integer.
  let prev = 0;

  // Finding the block where the element is present (if it is present)
  while (arr[Math.min(step, n) - 1] < x) {
    //calculates the minimum value between step and n, then -1 to adjust the zero-based indexing
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n) {
      return -1; // Element not found
    }
  }

  // Doing a linear search for x in the block beginning with 'prev'
  for (let i = prev; i < Math.min(step, n); i++) {
    if (arr[i] === x) {
      return i; // Element found at index i
    }
  }

  return -1; // Element not found
};

// Sorted array
const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
const target = 21;

// Find the index of the target value using Jump Search
const index = jumpSearch(arr, target);

if (index !== -1) {
  console.log(`Target ${target} found at index ${index}`);
} else {
  console.log(`Target ${target} not found in the array`);
}
