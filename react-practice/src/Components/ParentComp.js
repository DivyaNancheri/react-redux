import React, { Component , PureComponent} from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

class ParentComp extends Component {
  state = {
    name: "Divya",
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Divya",
      });
    }, 2000);
  }

  render() {
    const { name } = this.state;
    console.log("********* Parent render***************")
    return (
      <div>
        Parent Component
        {/* <MemoComp name={name} /> */}
        <RegularComp name={name}></RegularComp>
         <PureComp name={name}/>
      </div>
    );
  }
}

export default ParentComp;
// PureComp, RegularComponent, ParentCmp - 26 - PureComponent
// MemoComp - 27 - Memo
