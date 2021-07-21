import React, { Component } from "react";
import withCounter from "./withHOC";

class HOCclick extends Component {
  

  render() {
    // const {count} = this.state;
    const {name, count, incrementCount,id} =this.props
    console.log("in button")
    return (
      <div>
        <button onClick={incrementCount}>{id} {name} {count} </button>
      </div>
    );
  }
}

export default withCounter(HOCclick, 5);

// UpdatedComponent=withCounter
// OriginalCOmponent=WrappedComponent
// NewComponent=WithComponnet


//HOCclick, HOCHover,withHOC - 33,34,35- HOC
