import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Region from './pages/Region';
import Dashbord from './pages/Dashbord';
import Home from './pages/Home';
import Vaccin from './pages/Vaccin';

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="region"element={<Region/>}></Route>
          <Route path="dashbord"element={<Dashbord/>}></Route>
          <Route path="/vaccin"element={<Vaccin/>}></Route>
        </Routes>
      </Router>
     
    
  );
}

export default App;
