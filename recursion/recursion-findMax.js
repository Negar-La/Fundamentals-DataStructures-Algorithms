// Recursive function to find the maximum value in an array
const findMax = (items) => {
  // Base case: If there's only one item, return it
  if (items.length === 1) {
    return items[0];
  }

  // Get the first element in the array
  const op1 = items[0];
  console.log("op1 is ", op1);

  // Recursively call the function on the rest of the array
  const op2 = findMax(items.slice(1)); //items.slice(1) is used to obtain a new array containing all elements except the first one.
  console.log("op2 is ", op2);

  // Compare op1 and op2, returning the larger value
  return op1 > op2 ? op1 : op2;
};

const items = [3, 42, 12, 9, 87, 5, 2, 34, 66];
const max = findMax(items);
console.log(`The maximum value is: ${max}`);
//Linear time complexity O(n)
