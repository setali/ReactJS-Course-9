function CounterWrapper () {
  let counter = 0

  function increase () {
    console.log(++counter)
  }

  function decrease () {
    console.log(--counter)
  }

  return { increase, decrease }
}

const myCounter = CounterWrapper()

console.log(myCounter)

function reset () {
  counter = 0
}

// function func (a) {
//   return function (b) {
//     return function (c) {
//       console.log(a, b, c)
//       return a + b + c
//     }
//   }
// }

// // console.log(func(2)(5)(8))

// const func20 = func(20)

// console.log(func20(5)(10))

// const func30 = func20(10)

// console.log(func30(60))
