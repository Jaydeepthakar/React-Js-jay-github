import { useState } from "react";

function State() {
  const [name, setName] = useState("jay");

  const changeName = () => {
    setName("jaydeep");
  };

  const [obj, setObj] = useState({ name: "om", city: "ahmedabad" });

  const changeObjCity = () => {
    setObj({
      ...obj,
      city: "surat",
    });
  };

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>Change Name</button>

      <h1>
        {obj.name} - {obj.city}
      </h1>
      <button onClick={changeObjCity}>Change City</button>
    </div>
  );
}

export default State;
