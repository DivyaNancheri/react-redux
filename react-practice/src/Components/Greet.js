import react from "react";

// function Greet(){
//     return <h1> hello</h1>
// }

const Greet = (props) => {
    console.log(props)
  return (
    <div>
      <h1>hello {props.name} {props.id}</h1>
      {props.children}
    </div>
  );
};

const Grret=(props)=>{
  return (
    <h1>You Will achieve it.
      
    </h1>
  )
}
export default Greet;
//props explaination 9