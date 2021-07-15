import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParentInput extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef();
    }
  
    clickHandler = () => {
      this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <FRInput ref={this.inputRef}/>
                <button onClick={this.clickHandler}> Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput
// FRParentInput,FRInput-30 - Forwarding Refs    FRParentInput is parentClass