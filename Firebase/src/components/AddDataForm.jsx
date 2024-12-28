import React, { useState } from "react";
import { ref, push } from "firebase/database";
import { database } from "../firebaseConfig";

const AddDataForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataRef = ref(database, "users");
    push(dataRef, formData)
      .then(() => {
        alert("Data added successfully!");
        setFormData({ name: "", email: "" });
      })
      .catch((error) => {
        console.error("Error adding data:", error);
        alert("Failed to add data.");
      });
  };

  return (
    <div>
      <h2>Add Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddDataForm;
