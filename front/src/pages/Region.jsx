import React from 'react'
import AddRegion from '../components/AddRegion'
import SidBar from '../components/SidBar'
import Table from '../components/Table'

const Region = ({logout}) => {
  return (
    <div>
        <SidBar logout={logout}/>
        <div className="h-full md:ml-64">
            <AddRegion/>
            <Table/>
        </div>
    </div>
 
  )
}

export default Region