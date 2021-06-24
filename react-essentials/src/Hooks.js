import React, { useState, useEffect, useReducer } from "react";

//1. useState, useEffect EXAMPLE
// function Hooks(){
//     const [emotion, setEmotion]= useState('___');
//     console.log(emotion);

//     useEffect(()=> {
//         console.log('emotion =', emotion)
//     }, [emotion]);
//     return (
//         <>
//             <h1>Divya is {emotion}</h1>
//             <button onClick={() => setEmotion( 'happy')}>happy</button>
//             <button onClick={() => setEmotion( 'cool')}>cool</button>
//             <button onClick={() => setEmotion( 'positive')}>positive</button>
//         </>
//     );
// }

// 2. to incorporate useReducer with useState
// function Hooks() {
//   const [checked, setChecked] = useState(false);

//   function toggle(){
//     setChecked((checked) => !checked)
//   }
//   return (
//     <>
//       <input
//         type="checkbox"
//         value={checked}
//         // onChange={() => setChecked((checked) => !checked)}
//           onChange={toggle} //   So instead of hard coding this behavior into onChange events we can abstract it away into its own function. Now, we can take this a step further, using another one of these react hooks called useReducer.
//           />
//       <p>{checked ? "checked": " not checked"}</p>
//     </>
//   );
// }

// 3. to incorporate useReducer
// upgrade from useState to useReducer. We've created a reducer function that takes in the current state and returns a new state. Then we can use that function to update the state for the checkbox.
function Hooks() {
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false);

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={toggle}
      />
      <p>{checked ? "checked" : " not checked"}</p>
    </>
  );
}
export default Hooks;

//  A reducer function's most simple definition is it takes in the current state
//   and it returns a new state. If checked is false, it should return the opposite, which is true.
