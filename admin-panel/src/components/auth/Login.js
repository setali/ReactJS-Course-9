import Form, { Text, Submit } from '../utils/Form'
import '../../assets/css/login.css'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/user'

export default function Login () {
  const dispatch = useDispatch()

  function signIn (values) {
    dispatch(login(values))
  }

  return (
    <div className='login-page'>
      <h2>Login Form</h2>
      <div>
        <Form onFinish={signIn}>
          <Text required name='username' label='نام کاربری' />
          <Text required name='password' label='رمز عبور' />
          <Submit label='ورود' />
        </Form>
      </div>
    </div>
  )
}
