import { Divider } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import request from '../../tools/request'
import { connect } from 'react-redux'

function Full ({ setItems, person }) {
  const { id } = useParams()

  useEffect(() => {
    request(`/users/${id}`).then(response => setItems(response.data))
  }, [id])

  return (
    <div>
      <h3>نمایش کاربر</h3>
      <Divider />
      <label>نام:</label>
      <Divider type='vertical' />
      {person.name}
      <Divider />
      <label>ایمیل:</label>
      <Divider type='vertical' />
      {person.email}
      <Divider />
      <Link to='/person'>بازگشت به لیست کاربران</Link>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    person: state.person
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setItem: data => dispatch({ type: 'PERSON', payload: data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Full)
