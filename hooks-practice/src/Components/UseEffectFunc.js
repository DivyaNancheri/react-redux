import React, { useEffect, useState } from "react";

function UseEffectFunc() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("effect");
    document.title = `you clciked ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => setCount(count + 1)}>clcik me</button>
    </div>
  );
}

export default UseEffectFunc;
// UseEffectFunc - 7
// UseEffectFunc - 8 - conditional rendering
