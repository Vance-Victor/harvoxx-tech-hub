import React from 'react'
import {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';





const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  
  return (
    <div className='home'>
                       
        
            <nav className="nav">
            <h1>
                <span className="harvoxx">HARVOXX</span>
                <span className="techHub">TECH HUB</span>
            </h1>

            <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <span><li><NavLink to="/signup">Signup</NavLink></li></span>
            <span><li><NavLink to="/login">Login</NavLink></li></span>
            </ul>
        </nav>
    
    <div className={click ? 'cover' : 'cover active'}></div>
    </div>
  )
}

export default Header


