import React from "react";
import { useNavigate } from "react-router-dom";
import "./APIContent.css";

export default function APIContent() {
  const navigate = useNavigate();

  return (
    <div className="api-content">
      <div className="container text-center my-5">
        <h2 className="title">API Content Page</h2>
        <p className="subtitle">Select a card to view fetched API data or see a detailed page.</p>

        <div className="row">
          {/* Card 1: First API Data */}
          <div className="col-md-4">
            <div className="card animated-card" onClick={() => navigate("/fetch-data")}>
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="First API Call" />
              <div className="card-body">
                <h5 className="card-title">First API Data</h5>
                <p className="card-text">Click to fetch and view data from the first API.</p>
              </div>
            </div>
          </div>

          {/* Card 2: Second API Data */}
          <div className="col-md-4">
            <div className="card animated-card" onClick={() => navigate("/combined-data")}>
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Second API Call with Images" />
              <div className="card-body">
                <h5 className="card-title">Second API Data</h5>
                <p className="card-text">Click to view data with images from the second API.</p>
              </div>
            </div>
          </div>

          {/* Card 3: Random API Data */}
          <div className="col-md-4">
            <div className="card animated-card" onClick={() => navigate("/random-api")}>
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Random API Call" />
              <div className="card-body">
                <h5 className="card-title">Random API Data</h5>
                <p className="card-text">Click to view refreshed data from a random API.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
