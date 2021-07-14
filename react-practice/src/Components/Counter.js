import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // 1. value increases but does not reflect in UI
    // this.state.count = this.state.count +1 ;

    // 2. passing object and call back function
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("callback value=",this.state.count); // prints the new state value
    //   }
    // );

    // 3.
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log("this.state.count =", this.state.count); //called before the state value is changed
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h1>Count ={this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;

//Counter: setState() explaination 11
