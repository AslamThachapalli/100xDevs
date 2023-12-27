/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let filteredStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let reversedStr = filteredStr.split('').reverse().join('')
  return reversedStr == filteredStr
}

isPalindrome('Able, was I ere I saw Elba!')

module.exports = isPalindrome;