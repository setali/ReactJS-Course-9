import { useEffect, useState } from 'react'

// function sum (a, b) {
//   const result = a + b
//   return result
// }

// console.log(sum(2, 3))
// console.log(sum(22, 30))

export default function AdvanceEffectState () {
  const [counter, setCounter] = useState(0)
  // 12EBDC
  // ABD162

  useEffect(() => {
    const id = setInterval(() => {
      console.log('In interval', counter)
      setCounter(c => c + 1)
    }, 1000)

    console.log('Mount', id, counter)
  }, [])

  console.log('render')

  return <div>Counter: {counter}</div>
}
