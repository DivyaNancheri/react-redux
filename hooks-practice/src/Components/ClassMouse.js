import React, { Component } from "react";

class ClassMouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  logMousePosition = (e) => {
    console.log("in logMousePosition");

    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  componentDidMount() {
    console.log("in componentDidMount");
    window.addEventListener("mousemove", this.logMousePosition);
  }

  componentWillUnmount() {
    console.log("in componentWillUnmount");
    window.removeEventListener("mousemove", this.logMousePosition);
  }
  render() {
    return (
      <div>
        X={this.state.x} Y={this.state.y}
      </div>
    );
  }
}

export default ClassMouse;
//ClassMouse, HookMouse - 9 - run effect only once
