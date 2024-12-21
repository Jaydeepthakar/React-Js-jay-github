import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Auth.css";

export default function Auth() {
    const [isSignup, setIsSignup] = useState(false);
    const [input, setInput] = useState({ email: "", password: "", confirmPassword: "" });
    const navigate = useNavigate();

    useEffect(() => {
        JSON.parse(localStorage.getItem("Users")) || [];
    }, []);

    const handleForm = (e) => {
        e.preventDefault();

        if (input.email.trim() === "" || input.password.trim() === "") {
            alert("Email and password are required.");
            return;
        }

        if (isSignup && input.password !== input.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const storedData = JSON.parse(localStorage.getItem("Users")) || [];
        const userData = { email: input.email, password: input.password };

        if (isSignup) {
            storedData.push(userData);
            localStorage.setItem("Users", JSON.stringify(storedData));
            alert("Sign up successful!");
        } else {
            const userExists = storedData.some(
                (user) => user.email === input.email && user.password === input.password
            );
            if (userExists) {
                alert("Login successful!");
                navigate("/datashow");
            } else {
                alert("Invalid email or password.");
            }
        }

        setInput({ email: "", password: "", confirmPassword: "" });
    };

    return (
        <div className="auth-container">
            <div className="form-container">
                <h2>{isSignup ? "Sign Up" : "Login"}</h2>
                <form onSubmit={handleForm} className="auth-form">
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={input.email}
                        onChange={(e) => setInput({ ...input, email: e.target.value })}
                        required
                        className="form-input"
                    />
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={input.password}
                        onChange={(e) => setInput({ ...input, password: e.target.value })}
                        required
                        className="form-input"
                    />
                    {isSignup && (
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={input.confirmPassword}
                            onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
                            required
                            className="form-input"
                        />
                    )}
                    <button type="submit" className="form-button">
                        {isSignup ? "Sign Up" : "Log In"}
                    </button>
                </form>
                <div className="toggle-container">
                    <button
                        onClick={() => setIsSignup(!isSignup)}
                        className="toggle-button"
                    >
                        {isSignup
                            ? "Already a member? Log In"
                            : "Don't have an account? Sign Up"}
                    </button>
                    <button
                        onClick={() => navigate("/datashow")}
                        className="view-button"
                    >
                        View User Data
                    </button>
                </div>
            </div>
        </div>
    );
}
