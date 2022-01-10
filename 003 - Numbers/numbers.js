const readlineSync = require("readline-sync");

// 1. Write a program to input 2 numbers and display the sum of the numbers to the console.
const sumOfTwoNumbers = () => {
  const num1 = readlineSync.question("Enter first number: ");
  const num2 = readlineSync.question("Enter second number: ");
  return parseInt(num1) + parseInt(num2);
};
sumOfTwoNumbers();

// 2. Write a JavaScript program to calculate the simple interest given P,R,T with the given formula.
// Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest
const simpleInterest = (p, t, r) => (p * t * r) / 100;
console.log(simpleInterest(1000, 5, 10));

// 3. Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.
// Formula: KE = 1/2 * m * v^2
const kineticEnergy = (m, v) => (1 / 2) * m * v * v;
console.log(kineticEnergy(10, 10));

// 4. Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: C = (F - 32) * 5/9 'F' and 'C' are the temperatures on the Fahrenheit scale and Celsius scale respectively.
const fahrenheitToCelsius = (f) => ((f - 32) * 5) / 9;
console.log(fahrenheitToCelsius(100));

// 5. Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.
const squareArea = (a) => a * a;
const squarePerimeter = (a) => a * 4;
const cubeArea = (a) => 6 * a * a;
const cubeVolume = (a) => a * a * a;
console.log(squareArea(10));
console.log(squarePerimeter(10));
console.log(cubeArea(10));
console.log(cubeVolume(10));

// 6.Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.
const profitOrLoss = (cp, sp) =>
  sp > cp ? `Profit: ${sp - cp}` : `Loss: ${cp - sp}`;
console.log(profitOrLoss(100, 200));

// 7. Write a program to calculate sum of N natural digits, as input by the users?
const sumOfNaturalNumbers = (n) => (n * (n + 1)) / 2;
console.log(sumOfNaturalNumbers(100));

// 8. Write a Program to Print N Odd Number in Descending Order.
const descendingOddNumbers = (n) => {
  let arr = [];
  for (let i = n; i > 0; i--) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  return arr;
};
console.log(descendingOddNumbers(10));

// 9. Write a JavaScript program to compute the sum of all digits that occur in a given string.
const sumOfDigits = (str) =>
  str.split("").reduce((acc, ele) => acc + parseInt(ele), 0);
console.log(sumOfDigits("12345"));

// 10. Write a JavaScript program that reverses a number.
const reverseNumber = (n) => {
  let num = n.toString();
  return parseInt(num.split("").reverse().join(""));
};
console.log(reverseNumber(12345));

// 11. Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.
// Enter a Number : 1234
// Enter the Number of Rotations : 2
// Output : 3412
const rotateLeft = (n, x) => {
  let num = n.toString();
  return parseInt(num.slice(x) + num.slice(0, x));
};
console.log(rotateLeft(12345, 2));

// 12. Write a Program to convert Decimal to Binary.
const decimalToBinary = (n) =>
  n === 0 ? 0 : (n % 2) + 10 * decimalToBinary(Math.floor(n / 2));
console.log(decimalToBinary(10));

// 12a. Write a Program to convert Octal to Decimal.
const octalToDecimal = (n) =>
  n === 0 ? 0 : (n % 10) + 8 * octalToDecimal(Math.floor(n / 10));
console.log(octalToDecimal(10));
