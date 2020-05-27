let isPalindrome = function(x) {
    x < 0 ? false : null;

    return x == `${x}`.split('').reverse().join('')

    // parse x to arr 
    // reverse it and parse back to string
};

console.log(isPalindrome(121))