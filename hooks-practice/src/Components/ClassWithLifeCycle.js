import React from "react";

class ClassWithLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: ''
    };
  }

  componentDidMount() {
    // console.log("in componentDidMount::this.state.count=",this.state.count);;
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate(prevProps,prevState) {
    if(prevState.count!==this.state.count){
      document.title = `${this.state.count +5} times`;
      console.log("in componentDidUpdate::this.state.count=")//,this.state.count);

    }
  }

  render() {
    // console.log("in render::this.state.count=",this.state.count);
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <input type='text' value={this.state.name} onChange={e=>this.setState({name: this.state.name})}/>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default ClassWithLifeCycle;
// ClassWithLifeCycle - 7 - useEffect after render
