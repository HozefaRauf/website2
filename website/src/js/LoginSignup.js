import React from 'react'
import * as Component from '../components/Component'
import '../css/LoginSignup.css'

export default function LoginSignup() {
  return (
    <div className='login-app'>
        <div className='loginContainer'>
          <form className='login-form'>
            <Component.Input type='email' placeholder='Email / Username'/>
            <Component.Input type='password' placeholder='Password'/>
            <div className='forgot-remember'>
              <label className='remember'><input type='checkbox' id='remember-me' name='remember-me'/>Remember Me</label>
              <a className='forgot'>Forgot Password?</a>
            </div>
            <Component.Button>SIGN IN</Component.Button>
          </form>

        </div>
    </div>
    
  )
}
