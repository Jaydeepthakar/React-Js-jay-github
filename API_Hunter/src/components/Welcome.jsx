import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

export default function Welcome() {
    const navigate = useNavigate();

    return (
        <div className="welcome-container">
            <h1>Welcome to Our Anime-Themed Application</h1>
            <p>Explore the features of this app by signing up or viewing API content.</p>
            <div className="card-container">
                {/* Sign-Up Card */}
                <div className="anime-card" onClick={() => navigate("/auth")}>
                    <img
                        src="/assets/signup.jpg"
                        alt="Sign Up"
                        className="card-image"
                        onError={(e) => (e.target.src = "https://via.placeholder.com/300")}
                    />
                    <div className="card-content">
                        <h3>Sign Up</h3>
                        <p>Create an account to access exclusive features.</p>
                    </div>
                </div>

                {/* API Content Card */}
                <div className="anime-card" onClick={() => navigate("/api")}>
                    <img
                        src="/assets/api-content.jpg"
                        alt="API Content"
                        className="card-image"
                        onError={(e) => (e.target.src = "https://via.placeholder.com/300")}
                    />
                    <div className="card-content">
                        <h3>API Content</h3>
                        <p>View content fetched from our API.</p>
                    </div>
                </div>

                
            </div>

            <button className="btn btn-secondary mt-3" onClick={() => navigate("/")}>
                Back to Home Page
            </button>
        </div>
    );
}
