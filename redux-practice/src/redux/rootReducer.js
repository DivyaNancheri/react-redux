import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./icecream/icecreamReducer";
import chocolateReducer from "./chocolate/chocolateReducer";
import userReducer from "./Users/userReducer"

const rootReducer = combineReducers({
    cake:cakeReducer,
    icecream: icecreamReducer,
    chocolate: chocolateReducer,
    user: userReducer
})

export default rootReducer