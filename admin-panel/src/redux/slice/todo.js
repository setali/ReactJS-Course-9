import { createSlice } from '@reduxjs/toolkit'
import request from '../../tools/request'

const slice = createSlice({
  name: 'todo',
  initialState: { list: [], item: {} },
  reducers: {
    setTodos: (state, action) => {
      state.list = action.payload
    },
    setTodo: (state, action) => {
      state.item = action.payload
    }
  }
})

export const { setTodos, setTodo } = slice.actions

export const todos = slice.reducer

export const getTodos = () => dispatch =>
  request('/todos').then(({ data }) => dispatch(setTodos(data)))

export const getTodo = id => dispatch =>
  request(`/todos/${id}`).then(({ data }) => dispatch(setTodo(data)))
