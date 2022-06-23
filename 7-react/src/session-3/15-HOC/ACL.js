import React, { Component } from 'react'

export const user = {
  id: 1,
  username: 'Ali',
  permissions: ['ADD_TASK', 'EDIT_TASK', 'DELETE_TASK', 'VIEW_TASK'],
  roles: ['ADMIN', 'WRITER', 'OPERATOR']
}

export default function ACL (Component) {
  return class MyACL extends React.Component {
    render () {
      return (
        (!this.props.permission ||
          user.permissions.includes(this.props.permission)) && (
          <Component {...this.props} />
        )
      )

      //   if (!this.props.permission) {
      //     return <Component {...this.props} />
      //   } else {
      //     return (
      //       user.permissions.includes(this.props.permission) && (
      //         <Component {...this.props} />
      //       )
      //     )
      //   }
    }
  }
}

// export default class ACL extends Component {
//   render () {
//     console.log(this.props.permission)
//     return (
//       user.permissions.includes(this.props.permission) && this.props.children
//     )
//   }
// }
