import React, { Component } from 'react'

export default class Stateless extends Component {
  state = {
    users: []
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
  }
  render () {
    return (
      <div>
        {this.state.users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

function User ({ user }) {
  return <div>{user.name}</div>
}
