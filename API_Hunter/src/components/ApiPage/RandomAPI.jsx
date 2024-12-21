import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RandomAPI.css";

export default function RandomAPI() {
  const [randomUser, setRandomUser] = useState(null);
  const [error, setError] = useState(null);

  // Function to fetch random user data
  const fetchRandomUser = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/");
      setRandomUser(response.data.results[0]); // Get the first user in the results array
      setError(null); // Reset error on successful fetch
    } catch (error) {
      setError("Error fetching random user data: " + error.message);
    }
  };

  // Fetch data on component load
  useEffect(() => {
    fetchRandomUser();
  }, []);

  return (
    <div className="random-api-container">
      <h2 className="title">Random User Profile</h2>

      {error && <div className="error alert alert-danger">{error}</div>}

      {randomUser ? (
        <div className="profile-card">
          <img
            src={randomUser.picture.large}
            className="profile-img"
            alt="Random User"
          />
          <div className="profile-details">
            <h3>
              {randomUser.name.title} {randomUser.name.first}{" "}
              {randomUser.name.last}
            </h3>
            <p>
              <strong>Email:</strong> {randomUser.email}
            </p>
            <p>
              <strong>Location:</strong> {randomUser.location.city},{" "}
              {randomUser.location.country}
            </p>
            <p>
              <strong>Phone:</strong> {randomUser.phone}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading random user profile...</p>
      )}

      {/* Refresh Button */}
      <div className="button-container">
        <button className="refresh-button" onClick={fetchRandomUser}>
          Refresh Profile
        </button>
      </div>
    </div>
  );
}
