import React from 'react'
import LoginForm from '../components/LoginForm'

const Login = ({user}) => {
  return (
    <div>
        <LoginForm user={user}/>
    </div>
  )
}

export default Login