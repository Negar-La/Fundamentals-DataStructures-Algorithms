//Searching for an item in an unordered list
//sometimes called a Linear search

items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 530];

const find_item = (item, itemList) => {
  for (let i = 0; i < itemList.length; i++) {
    if (itemList[i] == item) {
      return `Item ${item} found at position ${i}`; // Return the index where the item is located
    }
  }
  return "Item Not found.";
};

console.log(find_item(87, items));
console.log(find_item(250, items));
