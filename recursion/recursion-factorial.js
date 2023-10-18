const factorial = (n) => {
  // Base case to have a stopping condition: factorial of 0 is 1
  if (n === 0) {
    return 1;
  }

  // Recursive step: n! = n * (n-1)!
  return n * factorial(n - 1);
};

const formattedOutput = (base, result) => {
  return `${base}! is ${result}`;
};

// Example usage
console.log(formattedOutput(5, factorial(5))); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)
console.log(formattedOutput(4, factorial(4))); // 4! = 4 * 3* 2 * 1 = 24
console.log(formattedOutput(0, factorial(0)));
