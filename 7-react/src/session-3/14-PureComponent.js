import React, { Component } from 'react'

export default class Parent extends Component {
  state = {
    counter1: 0,
    counter2: 0
  }

  render () {
    console.log('Parent')
    return (
      <div>
        <div>Counter1: {this.state.counter1}</div>
        <div>Counter2: {this.state.counter2}</div>

        <button
          onClick={() =>
            this.setState(state => ({ counter1: state.counter1 + 1 }))
          }
        >
          Change Counter 1
        </button>

        <button
          onClick={() =>
            this.setState(state => ({ counter2: state.counter2 + 1 }))
          }
        >
          Change Counter 2
        </button>
        <MyComponent counter={this.state.counter1} />
        <MyPureComponent counter={{ data: this.state.counter1 }} />
      </div>
    )
  }
}

class MyComponent extends Component {
  shouldComponentUpdate (nextProps, nextSTate) {
    if (nextProps.counter !== this.props.counter) {
      return true
    }
    return false
  }

  render () {
    console.log('MyComponent')
    return <div>MyComponent: {this.props.counter}</div>
  }
}

class MyPureComponent extends React.PureComponent {
  render () {
    console.log('MyPureComponent')
    return <div>MyPureComponent: {this.props.counter.data}</div>
  }
}
