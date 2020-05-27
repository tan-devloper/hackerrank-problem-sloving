function miniMaxSum(arr) {
  const reducer = (accr , curr) => accr + curr; 
  let sortedArr = arr.sort(function(a, b){return a - b})
  console.log([...sortedArr].splice(0 , arr.length - 1).reduce(reducer) , [...sortedArr].splice(1 , arr.length).reduce(reducer))
}
console.log(miniMaxSum([1, 3, 5, 7, 9])
