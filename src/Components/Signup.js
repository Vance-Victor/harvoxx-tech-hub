import React from "react";
import { Link } from "react-router-dom";
import Nav from './Nav'
import welcomeImage from '../Images/welcome.png'

export default function Signup(){
    return(
        <section className="signup">
        <div
          className="image"
        >
          <img src={welcomeImage} alt="welcome" className="img"/>
        </div>
        <div className="myForm">
            <form id="form" className="form">
                <h2>Create an Account</h2>
                <p id="errorname" style={{ color: "red" }}></p>
                <p>Full Name</p>
                <input
                    type="text"
                    id="fullName"
                    placeholder="Full Name"
                    className="yourName" />


                <p id="erroremail" style={{ color: "red" }}></p>
                <p>Email</p>
                <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="yourEmail"
                />


                <p id="errorpassword" style={{ color: "red" }}></p>
                <p>Password</p>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="yourPassword"
                />
                <br/>
                <input className="button" type="button" value="Create Account" />
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    </section>
    )
}
