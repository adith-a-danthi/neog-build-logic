// 1. Find the sum of two matrix.
const matrixSum = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push([]);
    for (let j = 0; j < arr1[i].length; j++) {
      result[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return result;
};
console.log(
  matrixSum(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
  )
);

// 2. Display transpose of matrix. Explaination https://www.varsitytutors.com/linear_algebra-help/the-transpose
const matrixTranspose = (arr) => {
  const result = [];
  for (let i = 0; i < arr[0].length; i++) {
    result.push([]);
    for (let j = 0; j < arr.length; j++) {
      result[i].push(arr[j][i]);
    }
  }
  return result;
};
console.log(
  matrixTranspose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// 3. Find Identity matrix. Explanation https://www.varsitytutors.com/hotmath/hotmath_help/topics/identity-matrix
const identityMatrix = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push([]);
    for (let j = 0; j < n; j++) {
      result[i].push(i === j ? 1 : 0);
    }
  }
  return result;
};
console.log(identityMatrix(3));
