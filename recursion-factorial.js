const factorial = (n) => {
  // Base case to have a stopping condition: factorial of 0 is 1
  if (n === 0) {
    return 1;
  }

  // Recursive step: n! = n * (n-1)!
  return n * factorial(n - 1);
};

// Example usage
console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)
console.log(factorial(6));
