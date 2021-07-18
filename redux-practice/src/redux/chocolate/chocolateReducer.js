import { BUY_CHOCOLATE } from "./chocolateTypes"
const initialState ={
    numberOfChocolates: 50,
}

const chocolateReducer =(state = initialState, action) => {
   switch(action.type){
       case BUY_CHOCOLATE: return {
           ...state,
           numberOfChocolates:state.numberOfChocolates -1
       }
       default: return state; 
   }
}

export default chocolateReducer