import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
    }

    clickHandler(){
        console.log(this)
        this.setState({
            message:'Bye'
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
//EventBind: Binidng Event Handlers - 14
