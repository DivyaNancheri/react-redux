import {BUY_CAKE} from './cakeTypes'

// export const buyCake=()=>{
//     return {
//         type:BUY_CAKE,
//         info: '1st redux action'
//     }
// }

export const buyCake=(number = 1 )=>{
    return {
        type:BUY_CAKE,
        payload: number
    }
}