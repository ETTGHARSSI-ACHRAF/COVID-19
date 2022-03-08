import React from 'react'
import AddRegion from '../components/dashboard/AddRegion'
import SidBar from '../components/dashboard/SidBar'
import Table from '../components/dashboard/Table'

const Region = () => {
  return (
    <div>
      <SidBar />
      <div className="h-full md:ml-64">
        <AddRegion />
        <Table />
      </div>
    </div>

  )
}

export default Region