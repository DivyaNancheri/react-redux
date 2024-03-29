const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const createStore = redux.createStore 
const applyMiddleware = redux.applyMiddleware


const initialState = {
  loading: false,
  users: [],
  error: "",
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

function fetchUsersRequest(){
    return {
        type: FETCH_USERS_REQUEST
    }
}

//function fetchUsersSuccess (users) { 
// we can like this too
const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:return {
            ...state,
            loading: true
        }
        case FETCH_USERS_SUCCESS: return {
            loading: false,
            users: action.payload,
            error:''
        }
        case FETCH_USERS_FAILURE: return {
            loading: false,
            users: [],
            error:action.payload
        }
        default: return state
    }
}

//async action creator with thunk
const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data.map(user=> user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            dispatch(fetchUsersFailure(error.message))
        })
    }
}


const store= createStore(reducer, applyMiddleware(thunkMiddleware))
console.log('initial State=',store.getState())

store.subscribe(()=> console.log('updated state=', store.getState()))
store.dispatch(fetchUsers())