import React, { Component } from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
        incrementNumber = incrementNumber? incrementNumber : 1
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };

    render() {
      return (
        <WrappedComponent
          name="divya"
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;
//HOCclick, HOCHover,withHOC - 33,34,35- HOC
