import React, { useReducer, useState } from 'react'

function getId (todos) {
  return todos.length ? todos[todos.length - 1].id + 1 : 1
  // return todos.length
  // return Date.now()
}

function reducer (state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { title: action.payload, id: getId(state) }]

    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload)

    default:
      return state
  }
}

export default function TodosUseState () {
  const [todos, dispatch] = useReducer(reducer, [])
  const [task, setTask] = useState('')

  function addTodo (e) {
    e.preventDefault()
    if (!task) return
    dispatch({ type: 'ADD_TODO', payload: task })
    setTask('')
  }

  function removeTodo (id) {
    dispatch({ type: 'REMOVE_TODO', payload: id })
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
