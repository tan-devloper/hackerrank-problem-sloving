function countApplesAndOranges(s, t, a, b, apples, oranges) {
  console.log(apples.filter(e => a + e >= s && a + e <= t).length);
  console.log(oranges.filter(e => b + e >= s && b + e <= t).length);
}

countApplesAndOranges(7 , 11 , 5 , 15 , [-2 , 2 , 1] , [5 , -6])