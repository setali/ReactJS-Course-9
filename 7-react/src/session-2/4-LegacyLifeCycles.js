import React, { Component } from 'react'

export default class LegacyLifeCycles extends Component {
  UNSAFE_componentWillMount () {
    console.log('UNSAFE_componentWillMount')
  }

  UNSAFE_componentWillUpdate () {
    console.log('UNSAFE_componentWillUpdate')
  }

  UNSAFE_componentWillReceiveProps () {
    console.log('UNSAFE_componentWillReceiveProps')
  }

  render () {
    return <div>LegacyLifeCycles</div>
  }
}
