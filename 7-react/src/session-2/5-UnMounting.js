import React, { Component } from 'react'

export default class Parent extends Component {
  state = { mount: true }

  render () {
    return (
      <div>
        <button onClick={() => this.setState({ mount: !this.state.mount })}>
          {this.state.mount ? 'UnMount' : 'Mount'}
        </button>

        {this.state.mount && <Child />}
      </div>
    )
  }
}

class Child extends Component {
  state = {
    counter: 0
  }

  componentDidMount () {
    this.intervalId = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 })
    }, 1000)
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
    clearInterval(this.intervalId)
  }

  render () {
    return <div>Child: {this.state.counter}</div>
  }
}
