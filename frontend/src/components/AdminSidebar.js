import React from 'react'
import { Link } from 'react-router-dom'
import { BsPersonFillAdd } from 'react-icons/bs'
import './Sidebar.css'


function AdminSidebar() {
 
  
  return (
    <div className='main-sidebar'>
        <div className='top-items'>
            <Link to='/add-user' className='sidebar-items-top'><p><BsPersonFillAdd/> Add User</p></Link>
           
        </div>
        <div className='top-items'>
        </div>
        

    </div>
  )
}

export default AdminSidebar