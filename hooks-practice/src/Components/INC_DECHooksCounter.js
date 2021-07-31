import React, { useState } from "react";

function INC_DECHooksCounter() {
  const [count, setCount] = useState(0);

  function increFive() {
    for(let i=0;i<5 ;i++){
      // setCount(count + 1)  // if written like this the count will increment only by one
      setCount(prevCount=> prevCount + 1); // passing a function as an argument to setCount with prevCount as an argument
    }
  }
  return (
    <div>
      <h2>count: {count} times</h2>
      <button onClick={increFive}>Increment 5</button>
      <button onClick={() => setCount(count + 1)}>Increment </button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default INC_DECHooksCounter;
// INC_DECHooksCounter -3 - useState with previous state
