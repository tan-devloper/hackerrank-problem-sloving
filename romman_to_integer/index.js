var romanToInt = (s) => {
  const dict = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;
  for (let i=0; i< s.length; i++) {
      const actualValue = dict[s[i]]
      const nextlValue = dict[s[i + 1]]

      if (nextlValue && nextlValue > actualValue) {
          result += nextlValue - actualValue;
          ++i
      } else result += actualValue

  }

  return result;
};
// LV
