// 1. Given an input string S and two characters c1 and c2, you need to replace every occurrence of character c1 with character c2 in the given string
const replaceChar = (str, c1, c2) => str.replace(new RegExp(c1, "g"), c2);
console.log(replaceChar("Hello", "l", "e"));

// 2. Given an input string S that contains multiple words, you need to remove all the spaces present in the input string. There can be multiple spaces present after any word
const removeSpaces = (str) => str.replace(/\s+/g, "");
console.log(removeSpaces("Hello      World"));

// 3. Reverse the given string word wise. That is, the last word in given string should come at 1st place, last second word at 2nd place and so on. Individual words should remain as it is. example: Input : Welcome to NeoG Camp → Camp NeoG to Welcome
const reverseWordWise = (str) => str.split(" ").reverse().join(" ");
console.log(reverseWordWise("Welcome to NeoG Camp"));

// 4. A program that counts the value of each character and prints the most repeated character?
const mostRepeatedChar = (str) => {
  let obj = {};
  for (let char of str) {
    obj[char] = obj[char] ? obj[char] + 1 : 1;
  }
  let max = 0;
  let maxChar = "";
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      maxChar = key;
    }
  }
  return maxChar;
};
console.log(mostRepeatedChar("Hello"));

// 5. Write a program to toggle case of each character of the string "good afternoon" (example: "neogcamp" ⇒ "nEoGcAmP" )
const toggleCase = (str) =>
  str.split("").map(
      (ele, index) => index % 2 === 1 ? ele.toUpperCase() : ele.toLowerCase()
    ).join("");
console.log(toggleCase("good afternoon"));

// 6. Given a string "how was your day?" and a word "how", write a program that removes the occurrence of the specified word from given sentence. ( input: string⇒"programming camp are amazing",word⇒ "programming"; output:" camp are amazing")
const removeWord = (str, word) => str.replace(new RegExp(word, "gi"), "");
console.log(removeWord("programming camp are amazing", "programming"));
