import react from "react";

// function Greet(){
//     return <h1> hello</h1>
// }

const Greet = (props) => {
    console.log(props)
  return (
    <div>
      <h1>hello {props.name}</h1>
      {props.children}
    </div>
  );
};

export default Greet;