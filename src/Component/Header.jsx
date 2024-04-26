import React from 'react'
import {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
// import { FaBars} from "react-icons/fa";
// import { RiCloseFill} from "react-icons/ri";
// import Flickity from 'react-flickity-component'
// import { FaShoppingCart } from "react-icons/fa";





const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // const [activeNav, setActiveNav] = useState('/')

  
  return (
    <div className='home'>
                       
        
            <nav className="nav">
            <h1>
                <span className="harvoxx">HARVOXX</span>
                <span className="techHub">TECH HUB</span>
            </h1>

            <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/map">Map</NavLink></li>
            <span><li><NavLink to="/signup">Signup</NavLink></li></span>
            <span><li><NavLink to="/login">Login</NavLink></li></span>
            </ul>
        </nav>
    
    <div className={click ? 'cover' : 'cover active'}></div>
    </div>
  )
}

export default Header


