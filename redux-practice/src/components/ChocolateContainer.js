import React from 'react'
import {connect} from 'react-redux'
import {buyChocolate } from '../redux/index'

function ChocolateContainer(props) {
    return (
        <div>
            <h2>Number of Chocolate- {props.numberOfChocolates}</h2>
            <button onClick={props.buyChocolate}>Buy Chocolate</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numberOfChocolates: state.chocolate.numberOfChocolates
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyChocolate: ()=> dispatch(buyChocolate())
    }
} 
export default connect(mapStateToProps,mapDispatchToProps)(ChocolateContainer)
