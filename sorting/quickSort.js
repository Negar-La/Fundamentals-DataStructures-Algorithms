const quickSort = (arr) => {
  // Base case: If the array has 1 or 0 elements, it's already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Choose the first element as the pivot
  const pivot = arr[0];
  const left = []; // Initialize an array for values less than the pivot
  const right = []; // Initialize an array for values greater than or equal to the pivot

  // Iterate through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      // If the current element is less than the pivot, add it to the left array
      left.push(arr[i]);
    } else {
      // Otherwise, add it to the right array
      right.push(arr[i]);
    }
  }
  // Recursively apply Quicksort to the left and right arrays, and combine them with the pivot
  // using spread operator to merge arrays
  return [...quickSort(left), pivot, ...quickSort(right)];
};

const unsortedItems = [20, 6, 8, 53, 56, 23, 87, 41, 4, 19];
const sortedItems = quickSort(unsortedItems);

console.log("Unsorted Items: " + unsortedItems);
console.log("Sorted Items: " + sortedItems);
