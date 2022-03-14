import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import RowTable from './RowTable';

const Table = () => {
  const [cookies, setCookie] = useCookies('');
  const [centres,setCentres] = useState([]);
  const getCentres = () =>{
    axios.get('http://localhost:4000/api/centre',{
      headers: {
        'Authorization': `Basic ${cookies.token}` 
      }
    })
    .then(res=>{
      setCentres(res.data.centre)
    })
  }
  useEffect(() => {
    getCentres()
  },[centres])
  return (
    <table className="w-full">
    <thead >
      <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
        <th className="px-4 py-3 w-1/4">Centre</th>
        <th className="px-4 py-3 w-1/4">adresse</th>
        <th className="px-4 py-3 w-1/4">Action</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
    {centres?.map((row, index) => (
          <RowTable key={index} centre={row} getCentres={getCentres} />
      ))} 
    

    </tbody>
  </table>
  )
}

export default Table