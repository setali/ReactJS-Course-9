import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
  }

  handleChangeInput = e => this.setState({ [e.target.name]: e.target.value })

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input
            type='text'
            name='username'
            value={this.state.username}
            onChange={this.handleChangeInput}
          />
          <label>Password:</label>
          <input
            type='text'
            name='password'
            value={this.state.password}
            onChange={this.handleChangeInput}
          />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}
// export default class Form extends Component {
//   state = {
//     username: 'ali',
//     password: ''
//   }

//   handleSubmit = e => {
//     e.preventDefault()
//     console.log(this.state)
//   }

//   handleChangeUsername = e => this.setState({ username: e.target.value })

//   handleChangePassword = e => this.setState({ password: e.target.value })

//   render () {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>Username:</label>
//           <input
//             type='text'
//             value={this.state.username}
//             onChange={this.handleChangeUsername}
//           />
//           <label>Password:</label>
//           <input
//             type='text'
//             value={this.state.password}
//             onChange={this.handleChangePassword}
//           />
//           <input type='submit' value='Submit' />
//         </form>
//       </div>
//     )
//   }
// }
