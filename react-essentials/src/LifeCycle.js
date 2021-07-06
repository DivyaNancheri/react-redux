import React from "react";
import ReactDOM from "react-dom";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  componentDidMount() {
    // setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    // }, 1000);
  }
  componentDidUpdate() {
      console.log("in updtae")
    //   this.setState({ favoritecolor: "white" });
    document.getElementById("mydiv").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    console.log("in render")
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="mydiv"></div>
      </div>
    );
  }
}

export default LifeCycle;