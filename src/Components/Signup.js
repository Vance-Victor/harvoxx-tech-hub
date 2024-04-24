// signup.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import welcomeImage from "../Images/welcome.png";

export default function Signup() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};

        if (!fullName.trim()) {
            errors.fullName = "Full name is required";
        }

        if (!email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email is invalid";
        }

        if (!password.trim()) {
            errors.password = "Password is required";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSignup = async () => {
        if (validateForm()) {
            try {
                // Create user object
                const newUser = {
                    fullName: fullName.trim(),
                    email: email.trim(),
                    password: password.trim()
                };

                // Send POST request to server to store user data (replace 'users.json' with actual endpoint)
                await axios.post("/users.json", newUser);

                // Redirect to login page or display a success message
                console.log("Sign-up successful");
            } catch (error) {
                console.error("Error signing up:", error);
                // Handle error (e.g., display error message to the user)
            }
        }
    };

    return (
        <section className="signup">
            <div className="image">
                <img src={welcomeImage} alt="welcome" className="img" />
            </div>
            <div className="myForm">
                <form id="form" className="form">
                    <h2>Create an Account</h2>
                    <p style={{ color: "red" }}>{errors.fullName}</p>
                    <p>Full Name</p>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full Name"
                        className="yourName"
                    />
                    <p style={{ color: "red" }}>{errors.email}</p>
                    <p>Email</p>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        className="yourEmail"
                    />
                    <p style={{ color: "red" }}>{errors.password}</p>
                    <p>Password</p>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="yourPassword"
                    />
                    <br />
                    <input className="button" type="button" value="Create Account" onClick={handleSignup} />
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </form>
            </div>
        </section>
    );
}
