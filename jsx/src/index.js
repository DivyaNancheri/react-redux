//import react and react-dom
import React from "react";
import ReactDOM from "react-dom";
import Text from "./Text";

//create a react component
const App = () => {
  const buttonText = { text: "Click me" };
  const labelText = "Enter name:";

  return (
    <div>
      <Text />
      <label className="label" htmlFor="name">{/** in html we have for = "name" but React gives an error in console as in some browsers "for" is used for looping so to avoid such things htmlFor is used in React*/}
          {/*in jsx we use className as in ES 2015 we declare a react compaonent using the keyword 'class' to avoid collision we are using className in jsx even if we write class we wont get any errors */}
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: 'white' }}> {/* For html: <button style="backgroundColor: blue; color: white;">*/}
        {buttonText.text} {/** a js variable can we used in jsx by wrapping in {}  */}
      </button>
    </div>
  );
};

// take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
