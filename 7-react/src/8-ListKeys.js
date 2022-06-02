import React, { Component } from 'react'

export default class Users extends Component {
  state = { users: [] }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
  }

  render () {
    return (
      <div>
        <ol>
          {this.state.users.map((user, index) => (
            // <li key={index}> It's Wrong
            <User key={user.id} user={user} />
          ))}
        </ol>
      </div>
    )
  }
}

class User extends Component {
  render () {
    const { user } = this.props

    return <li>{user.name}</li>
  }
}

//   export default class Users extends Component {
//     render () {
//       return (
//         <div>
//           {[
//             <div key='ali'>Ali</div>,
//             <div key='qoli'>Qoli</div>,
//             <div key='eli'>Fati</div>
//           ]}
//         </div>
//       )
//     }
//   }
