import React from "react";
import { useLocation } from "react-router-dom";
import "./DataViewPage.css";

function DataViewPage() {
  const location = useLocation();
  const { data } = location.state || { data: [] }; // Fetch data passed from FetchDataPage

  return (
    <div className="data-view-page">
      <div className="container my-5">
        <h2 className="page-title">Full Data View</h2>

        {data.length > 0 ? (
          <div className="data-container">
            <h4 className="data-count">Total Data: {data.length}</h4>
            <ul className="data-list">
              {data.map((item, index) => (
                <li key={index} className="data-item">
                  <strong className="data-title">{item.title}</strong>
                  <p className="data-body">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="no-data-message">No data available.</p>
        )}
      </div>
    </div>
  );
}

export default DataViewPage;
