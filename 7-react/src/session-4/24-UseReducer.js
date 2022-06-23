import React, { useReducer, useState } from 'react'

const defaultState = 5

function reducer (state, { type, payload }) {
  switch (type) {
    case 'ADD':
      return state + payload

    case 'SUB':
      return state - payload

    case 'RESET':
      return defaultState

    default:
      return state
  }
}

export default function UseReducer () {
  const [count, setCount] = useState(0)

  const [state, dispatch] = useReducer(reducer, defaultState)

  return (
    <div>
      {state}
      <button onClick={() => dispatch({ type: 'ADD', payload: 1 })}>+</button>
      <button onClick={() => dispatch({ type: 'ADD', payload: 2 })}>+2</button>
      <button onClick={() => dispatch({ type: 'ADD', payload: 3 })}>+3</button>
      <button onClick={() => dispatch({ type: 'SUB', payload: 1 })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
      <hr />
      {count}
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  )
}
