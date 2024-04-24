import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from './Nav';
import welcomeImage from '../Images/welcome.png';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            // Send GET request to server to fetch user data
            const response = await axios.get("/users.json");
            const userData = response.data;

            // Validate email and password
            const user = userData.find(user => user.email === email && user.password === password);
            if (!user) {
                setError("Invalid email or password");
                return;
            }

            // Redirect to user profile page
            // Replace '/userProfile' with the actual path to your user profile page
            window.location.href = `/userProfile/${user.staff_id}`;
        } catch (error) {
            console.error("Error logging in:", error);
            // Handle error (e.g., display error message to the user)
        }
    };

    return (
        <section className="signup">
            <div className="image">
                <img src={welcomeImage} alt="welcome" className="img" />
            </div>
            <div className="myForm">
                <form id="form" className="form">
                    <h2>Login</h2>
                    <p style={{ color: "red" }}>{error}</p>
                    <p>Email</p>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        className="yourEmail"
                    />
                    <p>Password</p>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="yourPassword"
                    />
                    <input className="button" type="button" value="Login" onClick={handleLogin} />
                    <p>Dont have an Account? <Link to="/signup">Create an Account</Link></p>
                </form>
            </div>
        </section>
    );
}
