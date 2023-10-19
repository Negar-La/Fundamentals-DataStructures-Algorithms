const mergeSort = (dataset) => {
  //breaking condition
  if (dataset.length <= 1) {
    return dataset;
  }

  // Find the midpoint of the dataset
  const middle = Math.floor(dataset.length / 2);

  // Split the dataset into left and right arrays
  const left = dataset.slice(0, middle);
  const right = dataset.slice(middle);

  // Recursively call mergeSort on the left and right arrays
  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  // Merge the left and right arrays
  return merge(leftSorted, rightSorted);
};

const merge = (left, right) => {
  let i = 0; //index into the left array
  let j = 0; //index into the right array
  let merged = [];

  //while both arrays have elements
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  // Add any remaining elements from the left and right arrays
  while (i < left.length) {
    merged.push(left[i]);
    i++;
  }

  while (j < right.length) {
    merged.push(right[j]);
    j++;
  }

  return merged;
};

const unsortedList = [5, 2, 9, 3, 6, 1, 8];
console.log("Unsorted dataset:", unsortedList);

const sortedList = mergeSort(unsortedList);
console.log("Sorted dataset:", sortedList);
