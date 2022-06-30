import React from 'react'
import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'

export default function Page404 () {
  return (
    <div>
      <Result
        status='404'
        title='۴۰۴'
        subTitle='متاسفانه این صفحه وجود ندارد.'
        extra={
          <Button type='primary'>
            <Link to='/'>بازگشت به خانه</Link>
          </Button>
        }
      />
    </div>
  )
}
