const efun = (num) => {
  if (num == 0) {
    return 1;
  } else {
    return num * efun(num - 2);
  }
};

console.log(efun(8)); //multiplying even numbers 8 * 6 * 4 * 2 =  384
console.log("=============");
//==================================================

const countup = (x) => {
  if (x == 11) {
    return;
  } else {
    console.log(x);
    countup(x + 1);
  }
};

countup(2); //2 3 4 5 6 7 8 9 10
console.log("=============");
//==================================================
const fun = (x, y) => {
  if (x == 0) {
    return y;
  } else {
    return fun(x - 1, x + y);
  }
};

console.log(fun(4, 3)); //  13
console.log("=============");
//==================================================
const multiplyingFunc = (x, y) => {
  if (y == 0) {
    return 0;
  } else {
    return x + multiplyingFunc(x, y - 1);
  }
};

console.log(multiplyingFunc(4, 2)); // 4 * 2 = 8
console.log(multiplyingFunc(3, 1)); // 3 * 1 = 3
console.log("=============");
//==================================================
const exam = (n) => {
  let x = 1;

  if (n === 1) return x;

  for (let k = 1; k < n; ++k) x = x + exam(k) * exam(n - k);

  return x;
};

console.log("exam 1 ", exam(1));
console.log("exam 2 ", exam(2));
console.log("exam 3 ", exam(3));
console.log("exam 4 ", exam(4));
console.log("exam 5 ", exam(5));
console.log("=============");
//==================================================

const function1 = (x, y) => {
  if (y === 0) return 0;
  return x + function1(x, y - 1);
};

const function2 = (x, y) => {
  if (y === 0) return 1;
  return function1(x, function2(x, y - 1));
};

console.log(function2(2, 3)); //2^3 = 8
console.log(function2(1, 5)); //1^5 = 1
console.log(function2(4, 3)); //4^3 = 64
console.log("=============");
//==================================================
const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

// fibonacci(9) = fibonacci(8) + fibonacci(7)
// fibonacci(8) = fibonacci(7) + fibonacci(6)
// fibonacci(7) = fibonacci(6) + fibonacci(5)
// fibonacci(6) = fibonacci(5) + fibonacci(4)
// fibonacci(5) = fibonacci(4) + fibonacci(3)
// fibonacci(4) = fibonacci(3) + fibonacci(2)
// fibonacci(3) = fibonacci(2) + fibonacci(1)
// fibonacci(2) = fibonacci(1) + fibonacci(0)

// fibonacci(2) = 1 + 0 = 1
// fibonacci(3) = 1 + 1 = 2
// fibonacci(4) = 2 + 1 = 3
// fibonacci(5) = 3 + 2 = 5
// fibonacci(6) = 5 + 3 = 8
// fibonacci(7) = 8 + 5 = 13
// fibonacci(8) = 13 + 8 = 21
// fibonacci(9) = 21 + 13 = 34

console.log(fibonacci(9)); // Output: 34
