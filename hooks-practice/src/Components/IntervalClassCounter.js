import React, { Component } from "react";

class IntervalClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  tick = () => {
    console.log("in tick");
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount() {
    console.log("in componentDidMount");
    this.interval = setInterval(this.tick, 1000); // interval to be set only once
  }

  componentWillUnmount() {
    console.log("in componentWillUnmount");
    clearInterval(this.interval);
  }

  render() {
    return <div>count={this.state.count}</div>;
  }
}

export default IntervalClassCounter;
// IntervalHookCounter, IntervalClassCounter - incorrect dependency
