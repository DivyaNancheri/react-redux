import React from 'react'
import {connect} from 'react-redux'
import {buyCake } from '../redux/index'

function CakeContainer(props) {
    console.log(props)
    return (
        <div>
            <h2>Number of cakes- {props.noOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        // noOfCakes: state.numberOfCakes // we can give a diff name if we want 
        noOfCakes: state.cake.numberOfCakes // as we called this with cake in root reducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: ()=> dispatch(buyCake())
    }
} 
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
