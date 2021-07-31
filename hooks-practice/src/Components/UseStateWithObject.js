import React, { useState } from "react";

function UseStateWithObject() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <label>enter FirstName:</label>
      <input
        type="text"
        value={name.firstName}
        // onChange={(e) => setName({ firstName: e.target.value })}// use state does not manually merge and update the state 
        onChange={(e) => setName({ ...name,firstName: e.target.value })}// we need to update mnaually with usage of spreas operator
      />
      <h2>first Name is - {name.firstName}</h2>
      <label>enter lastName:</label>
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name,lastName: e.target.value })}
      />
      <h2>last Name is - {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
}

export default UseStateWithObject;
// UseStateWithObject -4 - useState with object
