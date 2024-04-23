import React from "react";
import Nav from './Nav'

export default function Signup(){
    return(
        <section>
        <div></div>
        <div>
            <form id="form">
                <p id="errorname" style={{ color: "red" }}></p>
                <p></p>
                <input
                    type="text"
                    id="fullName"
                    placeholder="Full Name"
                    className="yourName" />

                <p id="errorStaffID" style={{ color: "red" }}></p>
                <input
                    type="text"
                    id="staffID"
                    placeholder="Staff ID"
                    className="yourStaffID" />

                <p id="erroremail" style={{ color: "red" }}></p>
                <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="yourEmail"
                />

                <p id="errorDepartment" style={{ color: "red" }}></p>
                <input
                    type="text"
                    id="department"
                    placeholder="Department"
                    className="yourDepartment" />

                <p id="errorpassword" style={{ color: "red" }}></p>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="yourPassword"
                />
            </form>
        </div>
    </section>
    )
}