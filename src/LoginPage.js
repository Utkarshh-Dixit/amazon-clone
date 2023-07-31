import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'

function LoginPage() {
    const signIn = e => {
        e.preventDefault()
    }

    const register = e =>{
        e.preventDefault()
    }

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
  return (
    <div className='login_Page'>
        <Link to='/'>
       <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=''/>
       </Link>
       <div className='login_container'>
           <h1>Sign-in</h1>

           <form>
            <h5>E-mail</h5>
            <input type='text' value={email} onChange={e => {setemail(e.target.value)}}/>
            <h5>Password</h5>
            <input type='password' value={password} onChange={e => {setpassword(e.target.value)}}/>
<br/>
            <button className='login_signInButton' value='submit' onClick={signIn}>Sign In</button>
           </form>

           <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

           <button className='login_registerButton' onClick={register}>Create your new amazon account</button>
       </div>
    </div>
  )
}

export default LoginPage