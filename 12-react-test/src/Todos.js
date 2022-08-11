import React, { useState } from 'react'

export default function Todos () {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  function addTodo (event) {
    event.preventDefault()

    if (todo) {
      setTodos(s => [...s, todo])
      setTodo('')
    }
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type='text'
          placeholder='todo'
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <button type='submit'>Add todo</button>
      </form>

      <ol data-testid='todo-list'>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ol>
    </div>
  )
}
