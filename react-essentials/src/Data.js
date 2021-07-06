import React, { useState, useEffect } from "react";
import "./App.css";

// https://api.github.com/users/eveporcello

function Data({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/user1s/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false)) //aftering setting data make it false
      .catch(setError);
  }, [login ]);

  if (loading) return <h1>Loading...</h1>;

  console.log("error=",error)
  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }
  
  if (data) {
    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.location}</p>
        <img alt={data.login} src={data.avatar_url} />
      </div>
    );
  }

  return <div>No Data Available</div>;
}

export default Data;