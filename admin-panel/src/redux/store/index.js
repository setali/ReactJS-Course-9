// import { createStore, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'
import reducer from '../reducers/index'

// const myMiddleware = ({ dispatch, getState }) => next => action =>
//   typeof action === 'function' ? action(dispatch, getState) : next(action)

const store = configureStore({ reducer })
// const store = createStore(reducer, applyMiddleware(thunk))

export default store
