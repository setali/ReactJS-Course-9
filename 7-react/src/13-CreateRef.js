import React, { Component } from 'react'

export default class CreateRef extends Component {
  state = {
    show: false
  }

  textInput = React.createRef()

  toggle = () => {
    this.setState(
      state => ({ show: !state.show }),
      () => {
        this.textInput.current?.focus()
      }
    )
  }

  render () {
    return (
      <div>
        <button onClick={this.toggle}>
          {this.state.show ? 'Hide' : 'Show'}
        </button>
        {this.state.show && <input ref={this.textInput} />}
      </div>
    )
  }
}
