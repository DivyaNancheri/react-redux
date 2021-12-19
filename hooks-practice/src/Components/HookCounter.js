import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(count + 1);
  }
  return (
    <div>
      <h2>Clicked {count} times</h2>
      <button onClick = {incrementCounter}>click me</button>
      <button onClick={()=>setCount(count+1)}>clicl</button>
      {/* <button onClick={() => setCount(count + 1)}>click me</button> */}
    </div>
  );
}

export default HookCounter;
// HookCounter -2 - useState Hook
