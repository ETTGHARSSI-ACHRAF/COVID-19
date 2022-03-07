import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import Stat from '../components/Chart'
import SidBar from '../components/SidBar'

const Dashbord = ({logout}) => {
  
  
  return (
    <div>
        <SidBar logout={logout}/>
        <div className="h-full md:ml-64">
           <Stat/>
        </div>
    </div>
  )
}

export default Dashbord