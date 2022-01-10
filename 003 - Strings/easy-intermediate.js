// 1. Write a program that converts the string into uppercase
const stringToUpperCase = (str) => str.toUpperCase();
console.log(stringToUpperCase("hello"));

// 2. Write a program that reads two strings and append first string to the second. So if first string is Good second string is Morning , the program should print MorningGood
const appendStrings = (str1, str2) => str2 + str1;
console.log(appendStrings("Good", "Morning"));

// 3. Program that reads string and count number of characters present in the string
const countCharacters = (str) => str.length;
console.log(countCharacters("Hello"));

// 4. Write a program that converts string like "124" to 124
const convertStringToNumber = (str) => parseInt(str);
console.log(convertStringToNumber("124"));

// 5. Write a program to delete all vowels from a string. Assume string is not more than 80 characters long
const deleteVowels = (str) => str.replace(/[aeiou]/gi, "");
console.log(deleteVowels("Hello"));

// 6. Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45
const isAlphanumeric = (str) => /\d+/i.test(str);
console.log(isAlphanumeric("batman@45"));

// 7. A program that reads three strings and prints the longest and smallest one
const longestAndSmallestString = (str1, str2, str3) => {
  let arr = [str1, str2, str3];
  arr.sort((a, b) => a.length - b.length);
  return `Longest: ${arr[2]}, Smallest: ${arr[0]}`;
};
console.log(longestAndSmallestString("Hey", "Hello", "Hi"));

// 8. A program that counts number of vowels and consonants in a String?
const countVowelsAndConsonants = (str) => {
  const vowels = str.split("").filter((ele) => /[aeiou]/i.test(ele)).length;
  const consonants = str
    .split("")
    .filter((ele) => /[bcdfghjklmnpqrstvwxyz]/i.test(ele)).length;
  return `Vowels: ${vowels}, Consonants: ${consonants}`;
};
console.log(countVowelsAndConsonants("Hello"));

// 9. Write a program which receives a string str that calculates the length of a string and return true if the length is greater than 7 without using strlen()
const greaterThanSeven = (str) => str.length > 7;
console.log(greaterThanSeven("Hello"));

// 10. Write a program that takes two strings and copies smaller string into bigger string
const copySmallToBig = (str1, str2) =>
  str1.length > str2.length ? str1 + str2 : str2 + str1;
console.log(copySmallToBig("Hello", "Hi"));

// 11. Given a string, determine if it is a palindrome, considering only alphanumeric characters
const isPalindrome = (str) =>
  str.toLowerCase().split("").reverse().join("") === str.toLowerCase();
console.log(isPalindrome("wow"));

// 12. For a given input string(str), write a function to print all the possible substrings. Without using substr method
const printSubStrings = (str) => {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      arr.push(str.slice(i, j));
    }
  }
  return arr;
};
console.log(printSubStrings("Hello"));

// 13. Write a program that removes the time from the given date string "Wed April 15, 7pm". It should return only the date without the time.
const removeTime = (str) => str.replace(/\d+[ap]m/g, "");
console.log(removeTime("Wed April 15, 7pm"));

// 14. Write a program that masks all but last four characters of the string "5565534276455423" to '#'

// Regex Explanation: /\d(?=\d{4})/g - Matches any digit followed by 4 digits
const maskAllButLastFour = (str) => str.replace(/\d(?=\d{4})/g, "#");
console.log(maskAllButLastFour("5565534276455423"));

// 15. Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case
const firstSixToUpperCase = (str) =>
  str.slice(0, 6).toUpperCase() + str.slice(6);
console.log(firstSixToUpperCase("tic tac toe is a fun game"));
