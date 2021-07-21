import React, { Component } from 'react'
import withCounter from "./withHOC";

class HOCHover extends Component {
    
    render() {
    const {name, count, incrementCount} =this.props

        return (
            <div>
                <p onMouseOver={incrementCount}> {count} times hovered</p>
            </div>
        )
    }
}

export default withCounter(HOCHover)
//HOCclick, HOCHover,withHOC - 33,34,35- HOC
