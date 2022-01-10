// 1. Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.
const encodeString = (str, shift) =>
  String.fromCharCode(
    ...str.split("").map((char) => char.charCodeAt(0) + shift)
  );

console.log(encodeString("neogcamp", 2));

// 2. Given a sentence, return a sentence with first letter of all words as capital.
const capitalize = (sentence) =>
  sentence
    .split(" ")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");

console.log(capitalize("hello world"));

// 3. Given an array of numbers, your function should return an array in the ascending order.
const sortDescending = (arr) => arr.sort((a, b) => b - a);
console.log(sortDescending([1, 2, 3, 4, 5]));

// 4. Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
const reverseSentence = (sentence) => sentence.split("").reverse().join("");
console.log(reverseSentence("hello world"));
