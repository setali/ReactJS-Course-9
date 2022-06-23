import React, { Component } from 'react'
import Button from './Button'
import Tasks from './Tasks'
// import ACL, { user } from './ACL'

export default class App extends Component {
  render () {
    return (
      <div>
        <h2>Tasks</h2>
        {/* {user.permissions.includes('ADD_TASK') && (
          <Button style={{ color: 'red' }}>Add task</Button>
        )} */}
        {/* <ACL permission='ADD_TASK'>
          <Button style={{ color: 'red' }}>Add task</Button>
        </ACL> */}
        <Button permission='ADD_TASK' style={{ color: 'red' }}>
          Add task
        </Button>
        <Tasks permission='VIEW_TASK' />
      </div>
    )
  }
}
