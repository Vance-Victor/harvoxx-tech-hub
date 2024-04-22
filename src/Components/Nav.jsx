import React from "react";


const Nav = () =>{

    return (
        // <h1>
        //         <span class="sp1">HARVOXX</span>
        //         <span class="sp2">TECH HUB</span>
        //     </h1>
        //     <ul id="list">
        //         <li><a href="#">Home</a></li>
        //         <li><a href="#About">About Us</a></li>
        //         <li><a href="#service">Services</a></li>
        //         <li><a href="#contact">Contact Us</a></li>
        //         <span><li><a href="#About">Get Started</a></li></span>
        //     </ul>

        //     <div class="menu">
        //         <i class="fa fa-bars" aria-hidden="true" style="color: #fdc134; font-size: 20px;" id="bar" onclick="show()"></i>
        //         <i class="fa-solid fa-xmark" aria-hidden="true" style="color: #fdc134; font-size: 20px;" id="x" onclick="hide()"></i>
        //     </div>
        // </nav>
        <div className="Nav">
            <h1>
                <span className="Harvoxx">HARVOXX</span>
                <span className="TechHub">TECH HUB</span>
            </h1>

            <ul>
            <li><a href="#">Home</a></li>
                <li><a href="#About">About Us</a></li>
                <li><a href="#service">Services</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <span><li><a href="#About">Get Started</a></li></span>
            </ul>
        </div>
    )
}