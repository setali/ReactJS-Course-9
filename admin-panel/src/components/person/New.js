import React from 'react'
import { Form, Button, Input, Checkbox, Select } from 'antd'

const { Option } = Select

export default function New () {
  function handleSubmit (values) {
    console.log(values)
  }

  return (
    <div>
      <Form
        name='basic'
        initialValues={{
          remember: true
        }}
        onFinish={handleSubmit}
      >
        <Form.Item
          label='نام کاربری'
          name='username'
          rules={[
            {
              required: true,
              message: 'نام کاربری ضروری است.'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='نام'
          name='name'
          rules={[
            {
              required: true,
              message: 'نام ضروری است'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name='admin' valuePropName='checked'>
          <Checkbox>مدیر</Checkbox>
        </Form.Item>

        <Form.Item name='gender' label='جنسیت'>
          <Select>
            <Option value='male'>مرد</Option>
            <Option value='female'>زن</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            ذخیره
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
