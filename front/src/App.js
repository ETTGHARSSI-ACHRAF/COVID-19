import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Login from './pages/Login';
import Region from './pages/Region';
import Dashbord from './pages/Dashbord';
import Home from './pages/Home';
import Vaccin from './pages/Vaccin';
import { useState } from 'react';

function App() {
  const [user,setUser] = useState(null);
  return (
    
      <Router>
        <Routes>
        {!user &&
            <>
            <Route path="/" element={<Home/>}></Route>
          <Route path="login" element={<Login authenticate={()=>setUser(true)}/>}></Route>
          <Route path="/vaccin"element={<Vaccin/>}></Route>
          </> 
          }
          
          {user &&
            <>
            <Route path="region"element={<Region logout={()=>setUser(false)}/>}></Route>
            <Route path="dashbord"element={<Dashbord logout={()=>setUser(false)}/>}></Route>
          </> 
          }
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
     
    
  );
}

export default App;
