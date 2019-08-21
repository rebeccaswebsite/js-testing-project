const { sum, palindrome, even } = require("./index")

describe("sum", () => {
  it("should add 1 + 1", () => {
    expect(sum(1, 1)).toEqual(2)
  })
})

describe("palindrome", () => {
  it("should return true if the word is a palindrome", () => {
    expect(palindrome("level")).toEqual(true)
  })
})

describe("filter", () => {
  it("should only return a list of even numbers", () => {
    expect(even([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([2, 4, 6, 8, 10])
  })
})
