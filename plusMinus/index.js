function plusMinus(arr) {
  let lengthArr = arr.length ;
  console.log(positive = arr.filter((number) => number > 0).length / lengthArr);
  console.log(negative = arr.filter((number) => number < 0).length / lengthArr);
  console.log(zeros = (1 - (positive + negative)));
  console.log(lengthArr);
}

plusMinus([1, 1, -3, 0, -2]);
