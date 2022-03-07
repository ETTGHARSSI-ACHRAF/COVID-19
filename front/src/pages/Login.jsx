import React from 'react'
import FormLogin from '../components/FormLogin'

const Login = ({authenticate}) => {
  return (
    <div className='font-mono'>
        <FormLogin authenticate={authenticate}/>
    </div>
  )
}

export default Login