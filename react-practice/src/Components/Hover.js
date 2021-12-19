import React, { Component } from 'react'

class Hover extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
        }
    }
    
    incrementCount = () => {
        this.setState(prev => {
            return {count: prev.count+1}
        })
    }

    render() {
        return (
            <h2 onMouseOver={this.incrementCount}>
                Hovered {this.state.count} times
            </h2>
        )
    }
}

export default Hover
