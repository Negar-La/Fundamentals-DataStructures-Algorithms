const func = (a, b) => {
  while (b != 0) {
    // Swap 'a' and 'b' values using a temporary variable 't'
    t = a;
    a = b;
    b = t % b; // Update 'b' to the remainder of 't' divided by 'b'
  }
  // Return the final value of 'a' after the loop ends
  return a;
};

console.log(func(20, 8));
console.log(func(60, 96));
