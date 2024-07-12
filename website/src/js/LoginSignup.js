import React from 'react'
import * as Component from '../components/Component'
import '../css/LoginSignup.css'

export default function LoginSignup() {
  const[signin,toggle]=React.useState(true);
  return (
    <div className='login-app'>
    <div className='container'>

        <div className='signin-container'>
          <form className='login-form'>
            <Component.Input type='email' placeholder='Email / Username'/>
            <Component.Input type='password' placeholder='Password'/>
            <div className='forgot-remember'>
              <label className='remember'><input type='checkbox' id='remember-me' name='remember-me'/>Remember Me</label>
              <a href='#' className='forgot'>Forgot Password?</a>
            </div>
            <Component.Button>SIGN IN</Component.Button>
          </form>
        </div>

        <div className='signup-container'>
          <form className='login-form'>
          <Component.Input type='text' placeholder='Name'/>
          <Component.Input type='email' placeholder='Email'/>
          <Component.Input type='password' placeholder='Password'/>
          <Component.Button>SIGN UP</Component.Button>
          </form>
        </div>

        <div className='banner-container'>
          <div className='banner'>

            <div className='left-banner'>
              <h1>Sign In</h1>
              <Component.Button>SIGN IN</Component.Button>
              
            </div>

            <div className='right-banner'>
            <h1>Create Account</h1>
            <Component.Button>SIGN UP</Component.Button>


            </div>
            
          </div>
        </div>

    </div>
    </div>
    
  )
}
