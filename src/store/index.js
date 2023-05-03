import { configureStore, createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name:"counter",
    initialState: {counter :0},
    reducers:{
        increment(state,action){
             state.counter++
        },
        
        decrement(state,action){
            state.counter--
        },
        
        addValue(state,action){
            state.counter+=action.payload
        },
        
        redValue(state,action){
            state.counter -= action.payload
        }
    }
})
const store = configureStore({
    reducer:counterSlice.reducer
})

export const actions = counterSlice.actions;
export default store;


























// import {createStore} from "redux"

// const reducerFn = (state = {counter: 10}, action) =>{

//     //Synchronous Function (no async function)
//     // we should not mutate the original state
//     if(action.type === "INC"){
//         const newCounter = state.counter + 1 
//         return {...state, counter:newCounter}
//     }
//     if(action.type === "DEC"){
//         // const newCounter = state.counter - 1 
//         return {...state, counter:state.counter - 1}
//     }
//     if(action.type === "ADD"){
//         return {...state, counter:state.counter + action.payload}
//     }
//     if(action.type === "RED"){
//         return {...state, counter:state.counter - action.payload}
//     }
//     return state;
// }

// const store = createStore(reducerFn)

// export default store