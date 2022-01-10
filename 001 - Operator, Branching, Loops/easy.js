// 1. Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.
const addNum = (...nums) => nums.reduce((acc, val) => acc + val, 0);
console.log(addNum(5, 13, 7, 21, 48)); // 94

// 2. Write a program to take a number input from user and determine whether the number is odd or even.
const isOddOrEven = (num) => (num % 2 === 0 ? "even" : "odd");
console.log(isOddOrEven(5)); // odd

// 3. Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.
const maxMin = (num1, num2) =>
  `Max Number: ${Math.max(num1, num2)}, Min Number: ${Math.min(num1, num2)}`;
console.log(maxMin(129, 251)); //Max Number: 251, Min Number: 129

// 4. Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.
const maxOfThree = (num1, num2, num3) =>
  `Max Number: ${Math.max(num1, num2, num3)}`;
console.log(maxOfThree(8, 23, 17)); //Max Number: 23

// 5. Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.
const minOfThree = (num1, num2, num3) =>
  `Min Number: ${Math.min(num1, num2, num3)}`;
console.log(minOfThree(35, 29, 46)); //Min Number: 29

// 6. Write program to take a month as an input from the user and find out whether the month has 31 days or not.
const has31Days = (month) =>
  ["January", "March", "May", "July", "August", "October", "December"].includes(
    month
  );
console.log(has31Days("January")); //true
