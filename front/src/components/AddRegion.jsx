import axios from 'axios';
import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import { AiFillFileAdd } from 'react-icons/ai';

const AddRegion = () => {
  const [nom,setNom] = useState('');
  const [adresse, setAdress] = useState('');
  const [cookies, setCookie] = useCookies('');
  const addCentre = () =>{
    axios.post('http://localhost:5000/api/centre',{
      "nom":nom,
      "adresse":adresse
    },{
      headers: {
        'Authorization': `Basic ${cookies.token}` 
      }
    })
  }
  return (
    <div className=" w-full grid grid-cols-1 gap-4 place-content-center h-48">
      <div className="flex flex-wrap  ml-4">

        <div className="w-full md:w-1/3 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Nom centre
          </label>
          <input
          onChange={(e)=>setNom(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="centre"
            required
          />
        </div>
        <div className="w-full md:w-1/3 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Adresse centre
          </label>
          <input
          onChange={(e)=>setAdress(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="adresse"
            required
          />
        </div>

        <div className="w-full md:w-1/3 px-3 mt-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-20 rounded " onClick={()=>addCentre()}>
           <AiFillFileAdd/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddRegion