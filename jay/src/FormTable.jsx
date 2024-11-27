import { useState } from "react";
import './App.css';

function FormTable() {
  const [formData, setFormData] = useState({ name: "", city: "", age: "" });
  const [dataList, setDataList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.city && formData.age) {
      setDataList((prevList) => [...prevList, formData]);
      setFormData({ name: "", city: "", age: "" });
    }
  };

  const handleDelete = (index) => {
    setDataList((prevList) => prevList.filter((_, i) => i !== index));
  };

  const handleReset = () => {
    setDataList([]);
    setSearchTerm("");
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter data based on the search term
  const filteredData = dataList.filter((data) =>
    Object.values(data).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <button type="submit">Add</button>
        <button type="button" onClick={handleReset}>
          Reset All
        </button>
      </form>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.city}</td>
              <td>{data.age}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FormTable;
