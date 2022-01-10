// 1. Given a and b, your function should return the value of a^b
const pow = (a, b) => Math.pow(a, b);
console.log(pow(2, 3));

// 2. Given length of a regular hexagon, your function should return area of the hexagon.
const hexagonArea = (length) => Math.sqrt(3) * Math.pow(length, 2);
console.log(hexagonArea(5));

// 3. Given a sentence, your functions should return the number of words in the sentence.
const countWords = (sentence) => sentence.split(" ").length;
console.log(countWords("Hello World"));

// 4. Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
const minOfNums = (...nums) => Math.min(...nums);
console.log(minOfNums(5, 13, 7, 21, 48));

// 5. Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
const maxOfNums = (...nums) => Math.max(...nums);
console.log(maxOfNums(5, 13, 7, 21, 48));

// 6. Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle
const typeOfTriangle = (a, b, c) => {
  if (a + b + c === 180) {
    if (a === b && b === c) {
      return "Equilateral Triangle";
    } else if (a === b || b === c || a === c) {
      return "Isosceles Triangle";
    } else {
      return "Scalene Triangle";
    }
  }
  return "Not a Triangle";
};
console.log(typeOfTriangle(30, 60, 90));
