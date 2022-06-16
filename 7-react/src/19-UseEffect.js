import React, { useEffect, useState } from 'react'

export default function App () {
  const [mount, setMount] = useState(true)
  return (
    <div>
      <button onClick={() => setMount(!mount)}>
        {mount ? 'UnMount' : 'Mount'}
      </button>
      {mount && <UseEffect />}
    </div>
  )
}

function UseEffect () {
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  // cDM, cDU
  useEffect(() => {
    const timeoutId = setTimeout(() => setCounter(counter + 1), 1000)
    //   console.log('Mount by', timeoutId)

    return () => {
      // console.log('Unmount', timeoutId)
      clearTimeout(timeoutId)
    }
  }, [counter])

  useEffect(() => {
    console.log('Component Mount')
  }, [])

  // cWUM
  useEffect(() => {
    return () => {
      console.log('Component unmount')
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    fetch('https://jsonplaceholder.typicode.com/users', { signal })
      .then(response => response.json())
      .then(data => setUsers(data))
      .finally(() => setLoading(false))

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <div>
      {loading ? (
        'Loading ....'
      ) : (
        <ol>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ol>
      )}
      <div>Counter: {counter}</div>
    </div>
  )
}
