import React from 'react'
import Navbar from '../components/Navbar'
import UpdateUser from '../components/UpdateUser'

function UpdateUserPage() {
  return (
    <div>
        <Navbar/>
        <div style={{display:"flex"}}>
            
            <UpdateUser/>
        </div>
    </div>
  )
}

export default UpdateUserPage