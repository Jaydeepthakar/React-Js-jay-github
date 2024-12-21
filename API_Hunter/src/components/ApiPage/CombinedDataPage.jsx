import React, { useState, useEffect } from "react";
import axios from "axios";
import './CombinedDataPage.css';

function CombinedDataPage() {
  const [photoData, setPhotoData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const photoApiUrl = "https://jsonplaceholder.typicode.com/photos"; // API for photos

    async function fetchPhotos() {
      try {
        const response = await axios.get(photoApiUrl);
        setPhotoData(response.data.slice(0, 30)); // Limiting data for better performance
      } catch (error) {
        setError("Error fetching data: " + error.message);
        console.error("API Error:", error);
      }
    }

    fetchPhotos();
  }, []);

  return (
    <div className="photo-page">
      <div className="container my-5">
        <h2 className="page-title">Photo API Data</h2>

        {error && <div className="error-message">{error}</div>}

        {/* Display Data from the Photo API */}
        {photoData.length > 0 ? (
          <div className="row">
            {photoData.map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="card photo-card">
                  <img 
                    src={item.url} 
                    className="card-img-top photo-img" 
                    alt={item.title} 
                    onError={(e) => e.target.src = "https://via.placeholder.com/150"}
                  />
                  <div className="card-body">
                    <h5 className="card-title photo-title">{item.title}</h5>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn btn-view">
                      View Image
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="loading-message">Loading photo data...</p>
        )}
      </div>
    </div>
  );
}

export default CombinedDataPage;
