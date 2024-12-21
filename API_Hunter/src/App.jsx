import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Auth from "./components/Signup page/Auth";
import DataShow from "./components/Signup page/DataShow";
import APIContent from "./components/ApiPage/APIContent";
import FetchDataPage from "./components/ApiPage/FetchDataPage";
import DataViewPage from "./components/ApiPage/DataViewPage";
import CombinedDataPage from "./components/ApiPage/CombinedDataPage"; 
import RandomAPI from "./components/ApiPage/RandomAPI";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; 
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar /> {/* Include the Navbar */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/datashow" element={<DataShow />} />
          <Route path="/api" element={<APIContent />} />
          <Route path="/fetch-data" element={<FetchDataPage />} />
          <Route path="/data-view" element={<DataViewPage />} />
          <Route path="/combined-data" element={<CombinedDataPage />}/>
          <Route path="/random-api" element={<RandomAPI />} />
        </Routes>
      </div>
      <Footer /> {/* Include the Footer */}
    </Router>
  );
}
