import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import AdminDash from './pages/AdminDash';
import Centre from './pages/Centre';
import Admin from './pages/Admin';
import Login from './pages/Login';
import PrivateRoute from './PrivateRoute';
import Vaccin from './pages/Vaccin';
import Pdg from './pages/Pdg';
import PdgDash from './pages/PdgDash';
import PdgAdmin from './pages/PdgAdmin';
import PdgRegion from './pages/PdgRegion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/vaccin' element={<Vaccin/>}/>
        <Route path='admin' element={<PrivateRoute role='admin'>  <Admin role='admin'/> </PrivateRoute>}>
          <Route path='dashbord' element={<AdminDash />}/>
          <Route path='centre' element={<Centre/>}/>
        </Route>
        <Route path='pdg' element={<PrivateRoute role='pdg'>  <Pdg role='pdg'/> </PrivateRoute>}>
          <Route path='dashbord' element={<PdgDash/>}/>
          <Route path='admin' element={<PdgAdmin/>}/>
          <Route path='region' element={<PdgRegion/>}/>
        </Route>
        <Route path='loginAdmin' element={<Login user="admin"/>} />
        <Route path='loginPdg' element={<Login user="pdg"/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
   
  );
}

export default App;
