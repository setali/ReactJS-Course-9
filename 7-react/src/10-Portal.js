import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const portalContainer = document.getElementById('portal')

export default class Portal extends Component {
  state = { counter: 0 }

  componentDidMount () {
    setInterval(() => this.setState({ counter: this.state.counter + 1 }), 1000)
  }

  render () {
    console.log(this.state.counter)
    return ReactDOM.createPortal(
      <div>{this.state.counter}</div>,
      portalContainer
    )
  }
}
