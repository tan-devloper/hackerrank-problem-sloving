// const factors = number => Array
//     .from(Array(number + 1), (_, i) => i)
//     .filter(i => number % i === 0)

//  console.log(factors(24));  


function find (string , c) {
  // let result = 0;
  // for (let charector in string) {
  //   string[charector] == c ? result += 1 : null
  // }
  // return result
  return string.split('').filter(i => i == c).length
}

console.log(find('hello' , 'l'))