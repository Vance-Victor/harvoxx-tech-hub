import React from "react";


const Nav = () =>{

    return (
    

        
        <div className="nav">
            <h1>
                <span className="harvoxx">HARVOXX</span>
                <span className="techHub">TECH HUB</span>
            </h1>

            <ul>
            <li><a href="#">Home</a></li>
                <li><a href="#About">About Us</a></li>
                <li><a href="#service">Services</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <span><li><a href="#About">Login</a></li></span>
            </ul>
        </div>
    )
}

export default Nav;