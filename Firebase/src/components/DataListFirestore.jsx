import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebaseConfig";

const DataListFirestore = () => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = collection(firestore, "users");
      try {
        const querySnapshot = await getDocs(collectionRef);
        const formattedData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDataList(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading data from Firestore...</p>;

  return (
    <div>
      <h2>Data List from Firestore</h2>
      {dataList.length === 0 ? (
        <p>No data available in Firestore</p>
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

export default DataListFirestore;
