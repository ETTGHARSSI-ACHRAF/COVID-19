import React from 'react'
import Stat from '../components/dashboard/Chart'
import SidBar from '../components/dashboard/SidBar'

const Dashbord = () => {
  return (
    <div>
      <SidBar />
      <div className="h-full md:ml-64">
        <Stat />
      </div>
    </div>
  )
}

export default Dashbord