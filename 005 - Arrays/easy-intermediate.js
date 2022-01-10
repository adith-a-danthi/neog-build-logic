// 1. Find sum of an array and display the output . Example [10,4,5,2,5,6,9].
const arrSum = (arr) => arr.reduce((a, b) => a + b, 0);
console.log(arrSum([10, 4, 5, 2, 5, 6, 9]));

// 2. Find average of an array and display the output.
const arrAvg = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(arrAvg([10, 4, 5, 2, 5, 6, 9]));

// 3. Find maximum and minimum of an array.
const arrMax = (arr) =>
  `Maximum value is ${Math.max(...arr)}, minimum value is ${Math.min(...arr)}`;
console.log(arrMax([10, 4, 5, 2, 5, 6, 9]));

// 4. Find Median and Mode of an array.
//   - Median : (N+1/2)th term.
//   - Mode : Most repeating term
const arrMedian = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);
  const mid = parseInt(Math.floor((sortedArr.length + 1) / 2));
  return sortedArr[mid];
};
console.log(arrMedian([10, 4, 5, 2, 5, 6, 9]));

const arrMode = (arr) => {
  const modeObj = {};
  arr.forEach((num) => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });
  const maxFrequency = Math.max(...Object.values(modeObj));
  return Object.keys(modeObj).find((key) => modeObj[key] === maxFrequency);
};
console.log(arrMode([10, 4, 5, 2, 5, 6, 9]));

// 5. Find sum of two arrays.
//  - [3,5,2,9,4] = 3+5+2+9+4 = 23
//  - [6,2,8,1,3] = 6+2+8+1+3 = 20
//  - Final Output : 20+23 = 43
const arrSum2 = (arr1, arr2) => [...arr1, ...arr2].reduce((a, b) => a + b, 0);
console.log(arrSum2([3, 5, 2, 9, 4], [6, 2, 8, 1, 3]));

// 6. Find number of constants and vowels in a string.
const countVowelsAndConsonants = (str) => {
  const vowels = str.split("").filter((char) => /[aeiou]/i.test(char)).length;
  const consonants = str
    .split("")
    .filter((char) => /[bcdfghjklmnpqrstvwxyz]/i.test(char)).length;
  return `Vowels: ${vowels}, Consonants: ${consonants}`;
};
console.log(countVowelsAndConsonants("Hello World"));

// 7. Shift an array by X to right.
//   - Example [1,2,3,4,5] after shifting to right [5,1,2,3,4]
const shiftArray = (arr, shift) => {
  for (let i = 0; i < shift; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
};
console.log(shiftArray([1, 2, 3, 4, 5], 2));
