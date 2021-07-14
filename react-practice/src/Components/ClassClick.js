import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log("click me")
    }

    render() {
        
        return (
            <div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default ClassClick
//ClassClick: Event Handling - 13