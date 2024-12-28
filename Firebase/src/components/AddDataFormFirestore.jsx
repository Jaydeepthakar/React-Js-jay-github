import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebaseConfig";

const AddDataFormFirestore = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const collectionRef = collection(firestore, "users");
    try {
      await addDoc(collectionRef, formData);
      alert("Data added to Firestore successfully!");
      setFormData({ name: "", email: "" });
    } catch (error) {
      console.error("Error adding document:", error);
      alert("Failed to add data to Firestore.");
    }
  };

  return (
    <div>
      <h2>Add Data to Firestore</h2>
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

export default AddDataFormFirestore;
