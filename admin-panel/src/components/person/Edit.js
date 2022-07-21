import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getPerson, updatePerson } from '../../redux/actions/person'
import { GENDER_OPTIONS } from '../../tools/constants'
import Form, { Checkbox, Select, Submit, Text } from '../utils/Form'
import Spinner from '../utils/Spinner'

export default function Edit () {
  const { id } = useParams()
  const navigate = useNavigate()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPerson(id))
  }, [])

  const person = useSelector(state => state.person)

  function handleSubmit (values) {
    dispatch(updatePerson({ ...person, ...values }))
    navigate('/person')
  }

  if (!person.id) {
    return <Spinner />
  }

  return (
    <div>
      <Form onFinish={handleSubmit} initialValues={person}>
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
        <Submit />
      </Form>
    </div>
  )
}
