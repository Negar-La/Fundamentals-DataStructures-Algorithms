const power = (num, pwr) => {
  if (pwr == 0) {
    return 1;
  } else {
    return num * power(num, pwr - 1);
  }
};

const formattedOutput = (base, exponent, result) => {
  return `${base} to the power of ${exponent} is ${result}`;
};

console.log(formattedOutput(5, 3, power(5, 3)));
console.log(formattedOutput(2, 3, power(2, 3)));
console.log(formattedOutput(4, 2, power(4, 2)));
console.log(formattedOutput(1, 5, power(1, 5)));
