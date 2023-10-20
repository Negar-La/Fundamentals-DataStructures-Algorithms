function isSorted(itemList) {
  for (let i = 0; i < itemList.length; i++) {
    if (itemList[i] > itemList[i + 1]) {
      return false;
    }
  }
  return true;
}

const list1 = [1, 2, 3, 4, 5];
const list2 = [3, 1, 4, 2, 5];

console.log(isSorted(list1)); // true
console.log(isSorted(list2)); // false
console.log("============================");

const isSorted2 = (arr) => {
  // Use the `every` method (callback function) to iterate over each element in the array
  return arr.every((value, index, array) => {
    if (index === 0) return true; // First element is always considered sorted
    // Check if the current element is greater than or equal to the previous one
    return value >= array[index - 1];
  });
};

const list01 = [1, 2, 3, 4, 5];
const list02 = [3, 1, 4, 2, 5];

console.log(isSorted2(list01)); // true
console.log(isSorted2(list02)); // false
