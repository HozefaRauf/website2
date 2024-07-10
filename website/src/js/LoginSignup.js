import React from 'react'
import * as Component from '../components/Component'
import '../css/LoginSignup.css'

export default function LoginSignup() {
  return (
    <div className='login-app'>
        <div className='loginContainer'>
          <form>
            <Component.Input type='email' placeholder='Email/Username'/>
            <Component.Input type='password' placeholder='Password'/>
            <p>Forgot Password?</p>
            <Component.Button>SIGN IN</Component.Button>
          </form>

        </div>
    </div>
    
  )
}
