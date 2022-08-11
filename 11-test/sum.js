function sum (a, b) {
  const result = +a + +b
  return result
}

function sumString (a, b) {
  return `Sum is ${sum(a, b)}`
}

module.exports = {
  sum,
  sumString
}
