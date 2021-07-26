const redux = require('redux')
const reduxLogger = require('redux-logger')


const createStore = redux.createStore 
const combineReducers= redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buy_cake(){
    return {
        type:BUY_CAKE,
        info: '1st redux action'
    }
}

function buy_icecream(){
    return {
        type:BUY_ICECREAM,
        info: '1st redux action'
    }
}

const initialState ={
     numberOfCakes: 10,
     numberOfIcecreams: 20
}

const initialCakeState ={
    numberOfCakes: 10
}

const initialIcecreamState ={
    numberOfIcecreams: 20
}

const cakeReducer =(state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numberOfCakes:state.numberOfCakes -1
        }
        default: return state; 
    }
}


const icecreamReducer =(state = initialIcecreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numberOfIcecreams:state.numberOfIcecreams -1
        }
        default: return state; 
    }
}

const reducer =(state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numberOfCakes:state.numberOfCakes -1
        }
        case BUY_ICECREAM: return {
            ...state,
            numberOfIcecreams:state.numberOfIcecreams -1
        }
        default: return state;  
    }
}

// const store= createStore(reducer)
// console.log('initial State=',store.getState())
// const unsubscribe =store.subscribe(()=> console.log('updated state=', store.getState()))
// store.dispatch(buy_cake())
// store.dispatch(buy_cake())
// unsubscribe()


const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})
const store= createStore(rootReducer, applyMiddleware(logger))
console.log('initial State=',store.getState())
// const unsubscribe =store.subscribe(()=> console.log('updated state=', store.getState()))
const unsubscribe =store.subscribe(()=> {})
store.dispatch(buy_cake())
store.dispatch(buy_icecream())
// store.dispatch(buy_cake())
// console.log('updated state=', store.getState())
unsubscribe()