import React, { useEffect, useState } from 'react';
import { FaSave} from 'react-icons/fa';
import { AiFillCloseCircle, AiOutlineDelete } from "react-icons/ai";
import {GrUpdate } from "react-icons/gr";
import axios from 'axios';
import { useCookies } from 'react-cookie';

export const RowRegion = (region,getRegions) => {
    const [cookies, setCookie] = useCookies('');
    const [show, setShow] = useState(true);
    const [hiden, setHiden] = useState(false);
    const [nom,setNom] = useState(region.region.nom);
    const showInput = (e) => {
        setShow(false);
        setHiden(true);
    
      }
      const hidenInput = (e) => {
        setShow(true);
        setHiden(false);
      }
      const deleteCentre = (id) =>{
        // console.log(id);
        axios.delete(`http://localhost:4000/api/region/${id}`,{
          headers: {
            'Authorization': `Basic ${cookies.token}` 
          }
        })
        .then(res=>{getRegions()})
      }
      const  updateCentre = (id) =>{
        axios.patch(`http://localhost:5000/api/centre/${id}`,{
          "nom":nom,
    //   "adresse":adresse
        },{
          headers: {
            'Authorization': `Basic ${cookies.token}` 
          }
        })
        .then(res=>{
          setShow(true);
        setHiden(false);
        })
      }
  return (
    <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
    <td className="px-4 py-3 text-sm w-1/4">
      { show &&
      <label>{region.region.nom}</label>
      }
      { hiden &&
        <input
        defaultValue={region.region.nom}
        onChange={(e)=>setNom(e.target.value)}
        className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="text"
        required
      />
      }
      
    </td>
    <td className="px-4 py-3 text-sm w-1/4">
      { show &&
    <button type="submit" className="bg-red-600  text-white  py-2 px-4 rounded "  onClick={()=>deleteCentre(region.region._id)}><AiOutlineDelete/></button>
      }
       { show &&
    <button type="submit" className=" bg-blue-600  text-white  py-2 px-4 rounded ml-1" id={`btneUpdate`} onClick={(e)=>showInput(e)}> <GrUpdate/></button>
  }
  { hiden &&
    <button type="submit" className="  bg-blue-600  text-white  py-2 px-4 rounded " id={`btnSave`} onClick={()=>updateCentre(region.region._id)}><FaSave/></button>
  }
  { hiden &&
    <button type="submit" className=" bg-yellow-400  text-white  py-2 px-4 rounded ml-1" id={`btneCansel`} onClick={(e)=>hidenInput(e)}> <AiFillCloseCircle/></button>
  }
    </td>
  </tr>
  )
}
