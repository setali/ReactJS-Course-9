import React, { useEffect, useState } from 'react'

export default function HooksRules () {
  const [count, setCount] = useState(0)

  if (count % 2) {
    return 'salam'
  }

  //   if (count % 2) {
  //     const [ali, setAli] = useState('')
  //   }

  //   function func () {
  //     const [qoli, setQoli] = useState(0)
  //   }

  //   for (let i = 0; i < 5; i++) {
  //     const [eli, setEli] = useState(1)
  //   }

  //   useEffect(() => {
  //     const [state, setState] = useState(0)
  //   }, [])

  const [ali, setAli] = useState('')

  return <div>Count: {count}</div>
}
