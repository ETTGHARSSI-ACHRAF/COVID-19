import React from 'react'
import {FaHome, FaUserFriends,FaCarAlt, FaRegFlag } from 'react-icons/fa';
import { AiFillCar, AiOutlineLogout } from "react-icons/ai";
import {  Link,useNavigate, NavLink } from "react-router-dom";
import { useCookies } from 'react-cookie';

const SidBar = ({logout}) => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
  const  logoute = () =>{
    removeCookie('token');
    logout();
    navigate('/');
  }
  return (
    <div>
         <div className="fixed flex flex-col  left-0 w-14 hover:w-64 md:w-64 bg-red-500 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
        <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-red-800 dark:bg-gray-800 border-none">
          <span className="hidden md:block">Responsable</span>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
      
          <ul className="flex flex-col py-4 space-y-1">
            <li>
              <NavLink to="/dashbord" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-red-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                <FaHome/>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
              </NavLink >
            </li>
            <li>
              <NavLink to="/region" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-red-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                <FaRegFlag/>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">centre</span>
              </NavLink >
            </li>
          </ul>
        
       
          <ul className='mb-1'>
          <li>
          
              <button className=" relative flex flex-row items-center h-11 focus:outline-none hover:bg-red-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6" onClick={()=>logoute()} >
                <span className="inline-flex justify-center items-center ml-4">
                <AiOutlineLogout/>
                </span>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SidBar