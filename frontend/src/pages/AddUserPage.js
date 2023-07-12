import React from 'react'
import Navbar from '../components/Navbar'
import AdminSidebar from '../components/AdminSidebar'
import AddUser from '../components/AddUser'

function AddUserPage() {
  return (
    <div>
        <Navbar/>
        <div style={{display:'flex'}}>
            <AdminSidebar/>
            <AddUser/>
        </div>
    </div>
  )
}

export default AddUserPage