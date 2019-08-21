function sum(a, b) {
  return a + b
}

function palindrome(str) {
  const reversed = str
    .split("")
    .reverse()
    .join("")

  return str === reversed
}

function even(nums) {
  return nums.filter(num => num % 2 === 0)
}

module.exports = {
  sum,
  palindrome,
  even
}
