import React, { Component } from 'react'

export default class Fragment extends Component {
  state = { users: [] }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
  }

  render () {
    return (
      <div>
        <table border='1'>
          {this.state.users.map(user => (
            <tr key={user.id}>
              <Columns user={user} />
            </tr>
          ))}
        </table>
      </div>
    )
  }
}

class Columns extends Component {
  render () {
    const { user } = this.props

    // return (
    //   <React.Fragment>
    //     <td>{user.id}</td>
    //     <td>{user.name}</td>
    //   <React.Fragment/>
    // )
    return (
      <>
        <td>{user.id}</td>
        <td>{user.name}</td>
      </>
    )
  }
}
