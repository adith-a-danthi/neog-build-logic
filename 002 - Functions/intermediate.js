// 1.Given an array, your function should return the length of the array.
const lengthOfArray = (arr) => arr.length;
console.log(lengthOfArray([1, 2, 3, 4, 5]));

// 2. Given an array and an item, your function should return the index at which the item is present.
const indexOfItem = (arr, item) => arr.indexOf(item);

// 3. Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
const replaceNum = (arr, num1, num2) =>
  arr.map((item) => (item === num1 ? num2 : item));

// 4. Given two arrays, your function should return single merged array.
const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];

// 5. Given a string and an index, your function should return the character present at that index in the string.
const charAtIndex = (str, index) => str[index];

// 6. Given two dates, your function should return which one comes before the other.
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021
const minDate = (date1, date2) => {
  const date1Arr = date1.split("/");
  const date2Arr = date2.split("/");
  const date1Obj = new Date(date1Arr[2], date1Arr[1] - 1, date1Arr[0]);
  const date2Obj = new Date(date2Arr[2], date2Arr[1] - 1, date2Arr[0]);
  return date1Obj < date2Obj ? date1 : date2;
};
console.log(minDate("02/05/2021", "24/01/2021"));
