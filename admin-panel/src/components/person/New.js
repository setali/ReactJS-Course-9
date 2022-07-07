import { message } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GENDER_OPTIONS } from '../../tools/constants'
import request from '../../tools/request'
import Form, { Checkbox, Select, Submit, Text } from '../utils/Form'

export default function New () {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleSubmit (values) {
    setLoading(true)
    request('/users', { method: 'POST', data: values })
      .then(response => {
        message.success('کاربر با موفقیت ساخته شد')
        navigate('/person')
      })
      .catch(() => message.error('متاسفانه مشکلی پیش آمده است'))
      .finally(() => setLoading(false))
  }

  return (
    <div>
      <Form onFinish={handleSubmit}>
        <Text
          label='نام کاربری'
          name='username'
          required
          placeholder='نام کاربری'
          max={5}
        />
        <Text label='نام' name='name' required />
        <Checkbox name='admin'>مدیر</Checkbox>
        <Select name='gender' label='جنسیت' required options={GENDER_OPTIONS} />
        <Submit loading={loading} />
      </Form>
    </div>
  )
}
