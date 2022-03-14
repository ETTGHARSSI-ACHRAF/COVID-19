import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import RowAdmin from './RowAdmin';

const TablaAdmin = () => {
    const [cookies, setCookie] = useCookies('');
  const [admin,setAdmin] = useState([]);
  const getAdmins = () =>{
    axios.get('http://localhost:4000/api/admin',{
      headers: {
        'Authorization': `Basic ${cookies.token}` 
      }
    })
    .then(res=>{
      // console.log(res.data.Admins);
      setAdmin(res.data.Admins)
    })
  }
  useEffect(() => {
    getAdmins()
  },[])
    return (
        <table className="w-full">
        <thead >
          <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            <th className="px-4 py-3 w-1/5">Nom</th>
            <th className="px-4 py-3 w-1/5">Prenom</th>
            <th className="px-4 py-3 w-1/5">Email</th>
            <th className="px-4 py-3 w-1/5">Region</th>
            <th className="px-4 py-3 w-1/5">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
          
        {admin?.map((row, index) => (
            <RowAdmin key={index} admin={row} getAdmins={getAdmins}/>
          ))
          
          } 
         
          
        
    
        </tbody>
      </table>
      )
}

export default TablaAdmin