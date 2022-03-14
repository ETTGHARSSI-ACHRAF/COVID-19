import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidbar from '../components/Sidbar'

const Admin = ({role}) => {
  
  return (
    <div>
         <Sidbar role={role}/>
        <div className="h-full md:ml-64">
        <Outlet />
            </div>
    </div>
  )
}

export default Admin