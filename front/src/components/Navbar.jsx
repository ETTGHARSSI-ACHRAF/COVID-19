import React from 'react'
import {  Link,useNavigate, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header>

    <a href="#" className="logo">c<span className="fas fa-virus"></span>ovid-19</a>

    <div id="menu" className="fas fa-bars"></div>

    <nav className="navbar">
        <ul>
            <li><NavLink to="/"  >home</NavLink></li>
            <li><NavLink to="/vaccin" >take your vaccine</NavLink></li>
            <li><NavLink to="/test" >contact us</NavLink></li>
        </ul>
    </nav>

</header>
  )
}

export default Navbar