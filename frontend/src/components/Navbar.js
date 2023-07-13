import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { getLocal } from '../helpers/auth';
import jwt_decode from "jwt-decode"
import './Navbar.css'

function Navbar() {
  const {username} = jwt_decode(getLocal())
  const history = useNavigate()
  const logout = ()=>{
    localStorage.removeItem('authToken')
    history('/login')

  }
  return (
    <div className='main-nav'>
    <button className="animated-button"><Link className='nav-items' to='/'>Home</Link></button>
    
        <div className='nav-right'>
       
          <Link className='logout-text' to='user-profile'>
          <button id="btn-message" class="button-message">
          <div class="content-avatar">
            <div class="status-user"></div>
            <div class="avatar">
              <svg class="user-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,12.5c-3.04,0-5.5,1.73-5.5,3.5s2.46,3.5,5.5,3.5,5.5-1.73,5.5-3.5-2.46-3.5-5.5-3.5Zm0-.5c1.66,0,3-1.34,3-3s-1.34-3-3-3-3,1.34-3,3,1.34,3,3,3Z"></path></svg>
            </div>
          </div>
          <div class="notice-content">
            <div class="username">{username}</div>
          </div>
        </button></Link>
          
        </div>
        {username && <button className="animated-button" onClick={logout}>
    <span>Logout</span>
    <span></span>
  </button>}
        
    </div>
  )
}

export default Navbar