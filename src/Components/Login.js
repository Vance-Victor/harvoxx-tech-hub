import React from "react";
import { Link } from "react-router-dom";
import Nav from './Nav'
import welcomeImage from '../Images/welcome.png'

export default function Login(){
    return(
        <section className="signup">
        <div
          className="image"
        >
          <img src={welcomeImage} alt="welcome" />
        </div>
        <div className="myForm">
            <form id="form">
                <h2>Login</h2>
        

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
                <input className="button" type="button" value="Login" />
                <p>Dont have an Account? <Link to="/signup">Create an Account</Link></p>
            </form>
        </div>
    </section>
    )
}