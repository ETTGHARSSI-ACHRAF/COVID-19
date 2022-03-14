import React from 'react'
import StateNoTike from '../components/StateNoTike'
import StateTike from '../components/StateTike'

const PdgDash = () => {
  return (
    <div className='grid grid-cols-2 gap-2 content-center'>
      <div >
      <StateTike/>
      </div>
      <div>
      <StateNoTike/>
      </div>
      
    </div>
  )
}

export default PdgDash