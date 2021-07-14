import React from "react";

//approach 2 INline Styling
function Inline() {
  return (
    <div>
      <h1 className="error">error</h1>
      {/* <h1 className={styles.success}>success</h1> */}

      <h1 style={{ color: "blue" }}>Inline</h1>
    </div>
  );
}

export default Inline;
//StyleSheet: Styling and CSS Basics - 20
