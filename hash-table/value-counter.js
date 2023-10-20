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

const counter = {};

for (const item of items) {
  if (Object.keys(counter).includes(item)) {
    // The item (key) already exists in the counter object.
    counter[item] += 1;
  } else {
    // The item (key) is encountered for the first time.
    counter[item] = 1;
  }
}

console.log(counter);
//Linear time complexity Big O(n)
