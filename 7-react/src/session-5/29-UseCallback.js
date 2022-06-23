import React, { useCallback, useEffect, useState } from 'react'

export default function UseCallback () {
  const [count, setCount] = useState(0)
  const [hight, setHight] = useState()

  useEffect(() => {
    setInterval(() => setCount(s => s + 1), 3000)
  }, [])

  const myInputRef = useCallback(node => {
    node?.focus()
  }, [])

  const myHeightRef = useCallback(node => {
    node && setHight(node.getBoundingClientRect().height.toFixed(2))
  }, [])

  return (
    <div>
      <h2 ref={myHeightRef}>Hello</h2>
      <div>Height: {hight}</div>
      <div>Count: {count}</div>
      <input ref={myInputRef} />
    </div>
  )
}
