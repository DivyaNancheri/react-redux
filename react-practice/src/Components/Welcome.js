import React from 'react';

class Welcome extends React.Component{

    render(){
        console.log("this.props=",this.props);
        const {name} = this.props;
        return(
            <div>
                <h1>Welcome {name}</h1>
            </div>
        );
    }
}

export default Welcome;
//props explaination 9