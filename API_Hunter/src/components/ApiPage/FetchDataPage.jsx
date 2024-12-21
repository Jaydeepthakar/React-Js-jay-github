import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './FetchDataPage.css';

function FetchDataPage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const apiEndpoint = "https://jsonplaceholder.typicode.com/posts"; // Replace with your API URL

    async function fetchData() {
      try {
        const response = await axios.get(apiEndpoint);
        setData(response.data); // Update state with API response
      } catch (error) {
        setError("Error fetching data: " + error.message);
        console.error("API Error:", error);
      }
    }

    fetchData();
  }, []);

  // Function to navigate and pass data to another page
  const handleViewDataClick = () => {
    navigate("/data-view", { state: { data } }); // Passing data to DataViewPage
  };

  return (
    <div className="container my-5">
      <h2>Fetched Data</h2>

      {error && <div className="error">{error}</div>}

      {data.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading data...</p>
      )}

      <button className="btn btn-primary" onClick={handleViewDataClick}>
        View Full Data
      </button>
    </div>
  );
}

export default FetchDataPage;
