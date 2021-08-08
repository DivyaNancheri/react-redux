import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []); // works for setCount(prevCount => prevCount + 1);
  // }, []); //[]: as we are setting interval only once but by [] this the count is not gonna update for every second
  //   }, [count]); // addinng count to dependency as we are gonna watch the count with tihis we can se changes at every sec

  return <div>{count}</div>;
}

export default IntervalHookCounter;
// IntervalHookCounter, IntervalClassCounter - incorrect dependency
