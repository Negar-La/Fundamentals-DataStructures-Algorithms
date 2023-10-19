const bubbleSort = (dataset) => {
  const length = dataset.length; // 5

  //the outer loop iterates from length - 1 (the end of the array) down to 0 (the beginning of the array) = moving from right to left in the array
  for (let i = length - 1; i >= 0; i--) {
    //the inner loop iterates from left to right
    for (let j = 0; j < i; j++) {
      if (dataset[j] > dataset[j + 1]) {
        // Swap elements
        const temp = dataset[j];
        dataset[j] = dataset[j + 1];
        dataset[j + 1] = temp;
      }
    }

    //We print the dataset after each iteration to visualize the sorting process.
    console.log(`Iteration ${length - i}: ${dataset}`);
  }
};

const numbers = [87, 56, 53, 49, 6];
console.log("Original dataset:", numbers);

bubbleSort(numbers);

console.log("Sorted dataset:", numbers);
