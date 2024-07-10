import React from 'react'
import * as Component from '../components/Component'
import '../css/LoginSignup.css'

export default function LoginSignup() {
  return (
    <div className='login-app'>
        <div className='loginContainer'>
          <form>
            <Component.Input></Component.Input>
          </form>

        </div>
    </div>
    
  )
}
