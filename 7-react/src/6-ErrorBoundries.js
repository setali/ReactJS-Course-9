import React, { Component } from 'react'

export default class Parent extends Component {
  render () {
    return (
      <div>
        <h2>ReactJS Course</h2>
        <ErrorBoundries>
          <Child />
        </ErrorBoundries>
      </div>
    )
  }
}

class ErrorBoundries extends Component {
  state = {
    hasError: false
  }

  //   static getDerivedStateFromError (error) {
  //     return {
  //       hasError: true
  //     }
  //   }

  componentDidCatch (error) {
    this.setState({ hasError: error })
  }

  render () {
    if (this.state.hasError) {
      return 'Ooooops, there is an error'
    }

    return this.props.children
  }
}

class Child extends Component {
  state = { counter: 0 }

  componentDidUpdate (prevProps, pervState) {
    if (pervState.counter === 5) {
      throw new Error('App crashed!!!')
    }
  }

  render () {
    return (
      <div>
        Child: {this.state.counter}
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
      </div>
    )
  }
}
