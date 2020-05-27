function birthdayCakeCandles(arr) {
  let max = Math.max(...arr)
  return arr.filter(item => item == max).length
}

console.log(birthdayCakeCandles([1 ,2 ,4 ,4]))