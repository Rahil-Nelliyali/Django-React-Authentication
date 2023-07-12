import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { toast } from "react-hot-toast";

import './LoginPage.js'

function SignupPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useNavigate()

  const signupSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username,
        email,
        password
      })
    })

    // const content = await response.json()
    console.log(response);
    if(response.status === 400){
      toast.error('Enter some details')
      await history('/signup')
    }else{
      await history('/login')
    }    
  }

  return (
    <div className="main">
    <form className="form" onSubmit={signupSubmit}>
      <div className="title">
        Welcome,<br />
        <span>Signup to continue</span>
      </div>
      <input type="text" placeholder="Username" name="username" className="input" onChange={e => setUsername(e.target.value)}/>
      <input type="email" placeholder="Email Address" name="email" className="input" onChange={e => setEmail(e.target.value)}/>

      <input type="password" placeholder="Password" name="password" className="input" onChange={e => setPassword(e.target.value)} />
      <input type="submit" value='SIGNUP' className="button-confirm" />

      
      <p>Already a member..?</p>

      <p><Link className='button-confirm' to='/login'>Login  →</Link></p>

    </form>
    </div>
  )
  }

  export default SignupPage