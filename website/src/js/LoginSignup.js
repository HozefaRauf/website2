import React from 'react'
import * as Component from '../components/Component'
import '../css/LoginSignup.css'

export default function LoginSignup() {
  return (
    <div className='login-app'>
        <div className='loginContainer'>
          <form className='login-form'>
            <Component.Input type='email' placeholder='Email/Username'/>
            <Component.Input type='password' placeholder='Password'/>
            <div className='forgot-remember'>
              <label><input type='checkbox' id='remember-me' name='remember-me'/>Remember Me</label>
              <p className='forgot'>Forgot Password?</p>
            </div>
            <Component.Button>SIGN IN</Component.Button>
          </form>

        </div>
    </div>
    
  )
}
