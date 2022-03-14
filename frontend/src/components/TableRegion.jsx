import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { RowRegion } from './RowRegion';


const TableRegion = () => {
    const [cookies, setCookie] = useCookies('');
    const [regions,setRegions] = useState([]);
    const getRegions = () =>{
      axios.get('http://localhost:4000/api/region',{
        headers: {
          'Authorization': `Basic ${cookies.token}` 
        }
      })
      .then(res=>{
        setRegions(res.data.region)
      })
    }
    useEffect(() => {
      getRegions()
    },[regions])
    return (
      <table className="w-full">
      <thead >
        <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
          <th className="px-4 py-3 w-1/4">Region</th>
          <th className="px-4 py-3 w-1/4">Action</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
      {regions?.map((row, index) => (
            <RowRegion key={index} region={row} getRegionss={getRegions} />
        ))} 
      
  
      </tbody>
    </table>
    )
}

export default TableRegion