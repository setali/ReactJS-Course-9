import React from 'react'

export default class Counter extends React.Component {
  state = {
    counter: 5
  }

  render () {
    console.log('render', this.state.counter)

    return (
      <div>
        <span>{this.state.counter}</span>
        <button
          style={{ marginLeft: '10px' }}
          className='button'
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increase
        </button>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          Decrease
        </button>
      </div>
    )
  }
}
