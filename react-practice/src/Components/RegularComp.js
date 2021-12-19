import React, { Component } from 'react'

class RegularComp extends Component {
    render() {
    console.log("Regular Component render")

        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegularComp
// RegularComp- 26 - PureComponent
// PureComp, RegularComponent, ParentCmp - 26 - PureComponent
