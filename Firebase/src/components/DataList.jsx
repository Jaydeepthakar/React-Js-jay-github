import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebaseConfig";

const DataList = () => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataRef = ref(database, "users");
    onValue(
      dataRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const formattedData = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setDataList(formattedData);
        } else {
          setDataList([]);
        }
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    );
  }, []);

  if (loading) return <p>Loading data...</p>;

  return (
    <div>
      <h2>Data List</h2>
      {dataList.length === 0 ? (
        <p>No data available</p>
      ) : (
        <ul>
          {dataList.map((item) => (
            <li key={item.id}>
              <strong>Name:</strong> {item.name} | <strong>Email:</strong>{" "}
              {item.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataList;
