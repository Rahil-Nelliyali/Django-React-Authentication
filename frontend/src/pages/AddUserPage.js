import React from 'react'
import Navbar from '../components/Navbar'
import AddUser from '../components/AddUser'

function AddUserPage() {
  return (
    <div>
        <Navbar/>
        <div style={{display:'flex'}}>
          
            <AddUser/>
        </div>
    </div>
  )
}

export default AddUserPage