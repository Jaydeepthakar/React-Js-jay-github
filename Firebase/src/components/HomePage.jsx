import React from "react";
import { useNavigate } from "react-router-dom";
// import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <h1>Welcome to Firebase Integration</h1>
      <div className="card-container">
        <div className="card">
          <h2>Realtime Database</h2>
          <p>Store and sync data in real-time.</p>
          <button onClick={() => navigate("/realtime")}>Explore</button>
        </div>
        <div className="card">
          <h2>Firestore Database</h2>
          <p>Flexible and scalable NoSQL database.</p>
          <button onClick={() => navigate("/firestore")}>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
