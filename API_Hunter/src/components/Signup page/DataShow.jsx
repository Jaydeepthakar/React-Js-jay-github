import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DataShow.css";

export default function DataShow() {
    const [storedData, setStoredData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editData, setEditData] = useState({ email: "", password: "" });

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("Users")) || [];
        setStoredData(data);
    }, []);

    const handleDelete = (index) => {
        const updatedData = storedData.filter((_, i) => i !== index);
        setStoredData(updatedData);
        localStorage.setItem("Users", JSON.stringify(updatedData));
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditData(storedData[index]);
    };

    const handleUpdate = () => {
        const updatedData = storedData.map((user, index) =>
            index === editIndex ? editData : user
        );
        setStoredData(updatedData);
        localStorage.setItem("Users", JSON.stringify(updatedData));
        setEditIndex(null);
        setEditData({ email: "", password: "" });
    };

    return (
        <div className="animated-theme">
            <div className="datas-container">
                <h2 className="text-center">User Data</h2>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {storedData.map((user, index) => (
                            <tr key={index} className="table-row">
                                <td>{index + 1}</td>
                                <td>
                                    {editIndex === index ? (
                                        <input
                                            type="email"
                                            value={editData.email}
                                            onChange={(e) =>
                                                setEditData({ ...editData, email: e.target.value })
                                            }
                                            className="form-control"
                                        />
                                    ) : (
                                        user.email
                                    )}
                                </td>
                                <td>
                                    {editIndex === index ? (
                                        <input
                                            type="password"
                                            value={editData.password}
                                            onChange={(e) =>
                                                setEditData({ ...editData, password: e.target.value })
                                            }
                                            className="form-control"
                                        />
                                    ) : (
                                        user.password
                                    )}
                                </td>
                                <td>
                                    {editIndex === index ? (
                                        <button
                                            onClick={handleUpdate}
                                            className="btn btn-success btn-sm"
                                        >
                                            Save
                                        </button>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => handleEdit(index)}
                                                className="btn btn-warning btn-sm"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(index)}
                                                className="btn btn-danger btn-sm"
                                            >
                                                Delete
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link to="/auth" className="btn btn-secondary mt-3">
                    Back to Sign In
                </Link>
            </div>
        </div>
    );
}
