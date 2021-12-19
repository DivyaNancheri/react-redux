import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor() {
        // super()
    
        this.state = {
             count: 0
        }
    }
   
    inc = () => {
        this.setState({
            count: this.state
        })
    }
    incrementCounter = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }
    
    render() {
        console.log(this.state.count)
        return (
            <div>
                <h2>Clicked {this.state.count} times</h2>
                {/* <button onClick={() => this.setState({ count: this.state.count + 1 })}> */}
                <button onClick={this.incrementCounter}>click me</button>
            </div>
        )
    }
}

export default ClassCounter
