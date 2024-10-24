import { useState } from "react";

export default function Counter() {  
  const [counter, setCounter] = useState(0);  
 
  return (  
  <div>  
  <h3>Counter: {counter}</h3>  
  <button onClick={() => setCounter(prevCounter => prevCounter +1)}>Increment</button>  
  <button onClick={() => setCounter(prevCounter => prevCounter -1)}>Decrement</button>  
  </div>  
  );  
 }


