import React from 'react'
import Navbar from '../components/Navbar'
import AdminDashboard from '../components/AdminDashboard'

function AdminPanelPage() {
  return (
    <div>
        <Navbar/>
        <div style={{display:'flex'}}>
          <AdminDashboard/>
        </div>
        
    </div>
  )
}

export default AdminPanelPage