import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <section className="home">
      <div className="nav">
        <h1>
          <span className="harvoxx">HARVOXX</span>
          <span className="techHub">TECH HUB</span>
        </h1>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <span><li><Link to="/login">Log in</Link></li></span>
          <span><li><Link to="/signup">Sign up</Link></li></span>
        </ul>
      </div>
    </section>
  );
}
