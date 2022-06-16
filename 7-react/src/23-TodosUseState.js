import React, { useState } from 'react'

export default function TodosUseState () {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState('')

  function getId () {
    return todos.length ? todos[todos.length - 1].id + 1 : 1
    // return todos.length
    // return Date.now()
  }

  function addTodo (e) {
    e.preventDefault()
    if (!task) return
    setTodos(todos => [...todos, { title: task, id: getId() }])
    setTask('')
  }

  function removeTodo (id) {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input value={task} onChange={e => setTask(e.target.value)} />
        <button type='submit'>Add todo</button>
      </form>
      <ol>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.id} {todo.title}
            <span
              onClick={() => removeTodo(todo.id)}
              style={{ color: 'red', margin: '10px', cursor: 'pointer' }}
            >
              x
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}
