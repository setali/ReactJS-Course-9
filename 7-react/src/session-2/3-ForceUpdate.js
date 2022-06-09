import React, { Component } from 'react'

export default class ForceUpdate extends Component {
  shouldComponentUpdate () {
    return false
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  render () {
    console.log('render')
    return (
      <div>
        {Math.random()}
        <button onClick={() => this.forceUpdate()}>Get Random</button>
      </div>
    )
  }
}
