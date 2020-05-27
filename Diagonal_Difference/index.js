const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

function diagonalDifference(arr) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let handleResult_1 = 0 , handleResult_2 = 0;
  let arr_1 = [],
    arr_2 = [];
  let posistion_1 = 0,
    posistion_2 = arr[0].length - 1
  for (let y = 0; y < arr.length; ++y) {
    arr_1.push(arr[y][posistion_1]);
    arr_2.push(arr[y][posistion_2]);
    posistion_1++;
    posistion_2--;
  }
  handleResult_1 = arr_1.reduce(reducer)
  handleResult_2 = arr_2.reduce(reducer)
  if (handleResult_1 > handleResult_2) {
    return handleResult_1 - handleResult_2
  } else {
    return handleResult_2 - handleResult_1
  }
}

console.log(diagonalDifference(arr))
