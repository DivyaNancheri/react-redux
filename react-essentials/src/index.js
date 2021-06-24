//import react and react-dom
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.js";
import Hooks from "./Hooks.js";
import Data from "./Data.js";
import RouteController from "./RouteController.js";
import "./index.css";

// const App = () => {
//   const buttonText = { text: "Click me" };
//   const labelText = "Enter name:";

//   return (
//     <div>
//       <Text />
//       <label className="label" htmlFor="name">{/** in html we have for = "name" but React gives an error in console as in some browsers "for" is used for looping so to avoid such things htmlFor is used in React*/}
//           {/*in jsx we use className as in ES 2015 we declare a react compaonent using the keyword 'class' to avoid collision we are using className in jsx even if we write class we wont get any errors */}
//         {labelText}
//       </label>
//       <input id="name" type="text" />
//       <button style={{ backgroundColor: "blue", color: 'white' }}> {/* For html: <button style="backgroundColor: blue; color: white;">*/}
//         {buttonText.text} {/** a js variable can we used in jsx by wrapping in {}  */}
//       </button>
//     </div>
//   );
// };

// ReactDOM.render(React.createElement("h1",null,"hello"), document.querySelector("#root"));
// ReactDOM.render(
//   React.createElement(
//     "ul",
//     null,
//     React.createElement("li", null, "jan"),
//     React.createElement("li", null, "feb"),
//     React.createElement("li", null, "mar")
//   ),
//   document.querySelector("#root")
// );

//fragments
function App2() {
  return <div> hello app2</div>;
}
// ReactDOM.render(
//     // with div an extra div is created to avoid this we use fragments
//   <div>
//     <App />
//     <App2 />
//   </div>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <React.Fragment>
//     <App />
//     <App2 />
//   </React.Fragment>,
//   document.getElementById("root")
// );

// ReactDOM.render(<Hooks />, document.getElementById("root"));

// fetching data
// ReactDOM.render(<Data login="DivyaNancheri"/>, document.getElementById("root"));

//routing
ReactDOM.render(
  <Router>
    <RouteController />
  </Router>,
  document.getElementById("root")
);
