import React, { useState } from 'react'

export default function Parent () {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  console.log('Parent')

  return (
    <div>
      <button onClick={() => setCounter1(s => s + 1)}>Change counter 1</button>
      <button onClick={() => setCounter2(s => s + 1)}>Change counter 2</button>
      <div>Counter1: {counter1}</div>
      <div>counter2: {counter2}</div>
      <MyComponent counter={counter1} />
      <MyMemoComponent counter={counter1} />
    </div>
  )
}

function MyComponent ({ counter }) {
  console.log('MyComponent', counter)
  return <div>MyComponent : {counter}</div>
}

const MyMemoComponent = React.memo(function ({ counter }) {
  console.log('MyMemoComponent', counter)
  return <div>MyComponent: {counter}</div>
})
