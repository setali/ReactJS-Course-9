import React, { useState } from 'react'

export default function UseState () {
  //   const state = useState(10)
  const [state, setState] = useState(() => 9999999n ** 9999999n)
  const [count, setCount] = useState(5)

  //   console.log(state)

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      {/* Value: {state.toString()} */}
      <button onClick={() => setState(state + 1n)}>+</button>
    </div>
  )
  //   return (
  //     <div>
  //       Value: {state[0]}
  //       <button onClick={() => state[1](state[0] + 1)}>+</button>
  //     </div>
  //   )
}
