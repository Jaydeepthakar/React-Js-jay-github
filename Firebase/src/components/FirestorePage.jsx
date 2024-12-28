import React from "react";
import AddDataFormFirestore from "./AddDataFormFirestore";
import DataListFirestore from "./DataListFirestore";

const FirestorePage = () => {
  return (
    <div>
      <AddDataFormFirestore />
      <DataListFirestore />
    </div>
  );
};

export default FirestorePage;
