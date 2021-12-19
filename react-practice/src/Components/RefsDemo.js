import React, { Component } from "react";

class RefsDemo extends Component {
  //   state = {
  //     inputRef: React.createRef(),
  //   };

  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log("mount=", this.inputRef);
  }
  clickHandler = () => {
    console.log("clickHandler=", this.inputRef);
    alert(this.inputRef.current.value);
  };
  render() {
    // console.log(this.inputRef);
    // this.inputRef.current.focus();

    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
        <button onClick={this.clickHandler}>Submit</button>
      </div>
    );
  }
}

export default RefsDemo;
// RefsDemo-28-Refs
