import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddDataForm from "./components/AddDataForm"; // Realtime
import DataList from "./components/DataList"; // Realtime
import FirestorePage from "./components/FirestorePage"; // Firestore
import "./App.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/realtime" element={<div><AddDataForm /><DataList /></div>} />
        <Route path="/firestore" element={<FirestorePage />} />
      </Routes>
    </Router>
  );
};

export default App;
