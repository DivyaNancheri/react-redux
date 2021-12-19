import React, { useState } from "react";

function UseStateWithArray() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseStateWithArray;
// UseStateWithArray - 5 - useState with Array
// https://git-rba.hackerrank.com/git/44f39168-e341-4fd8-8311-881b7173c627 calc

// https://git-rba.hackerrank.com/git/26e0e6b1-67d2-43dd-8ad7-6d3adb1b9e26  list

// https://git-rba.hackerrank.com/git/a772ac35-a937-48f8-a2d2-80d0a80ecb6f  stocks