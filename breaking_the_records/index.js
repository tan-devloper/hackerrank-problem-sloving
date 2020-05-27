function breakingRecords(scores) {
  let lowest = scores[0], highest = scores[0] ,  lowval =  0, highval = 0;

  scores.map(item => {
    if (item > highest) {
      highval += 1
      highest = item
    }
    if (item < lowest) {
      lowval += 1;
      lowest = item
    }

    
  })
  
  console.log(highval);
  console.log(lowval);

  // O(n) solution
}

breakingRecords(10 ,5 ,20 ,20, 4 ,5 ,2 ,25, 1]);
