//Writing Pseudocode

// function getEvenNumbers
// evenNumbers = []
// for i = 0 to i = length of evenNumbers
//   if (element % 2 === 0)
//     add element to the array evenNumbers
// return evenNumbers

const func = (x) => {
  const arr = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] % 2 == 0) {
      arr.push(x[i]);
    }
  }
  return arr;
};

//Mapping Inputs and Outputs
//Consider some complex and bigger input
//Consider the edge cases
const a = [1];
const b = [1, 2];
const c = [1, 2, 3, 4, 5, 6];
const d = [-300.35];
const e = [-700.1, 1000, 5.1, -1000.26, 52, 900];

console.log(func(a));
console.log(func(b));
console.log(func(c));
console.log(func(d));
console.log(func(e));

// Simplifying and Optimizing the Code:
const func2 = (x) => {
  return x.filter((element) => element % 2 === 0);
};

console.log(func2(a));
console.log(func2(b));
console.log(func2(c));
console.log(func2(d));
console.log(func2(e));
