import React from "react";
import Nav from './Nav'

export default function Login(){
    return(
        <section>
        <div></div>
        <div>
            <form id="form">
                <h3>Login</h3>
        

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
                <input type="button" value="Login" />
                <p>Dont have an Account? Create an account</p>
            </form>
        </div>
    </section>
    )
}