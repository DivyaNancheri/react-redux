import React from 'react';

class Welcome extends React.Component{

    render(){
        console.log("this.props=",this.props);
        return(
            <div>
                <h1>Welcome {this.props.name}</h1>
            </div>
        );
    }
}

export default Welcome;