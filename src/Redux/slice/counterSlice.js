import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name:"counter",
    initialState:{
        count:0 // this is a state and it is defined in the component
    },
    reducers:{
        increment:(state)=>{
            state.count=state.count+1
        },
        reset:(state)=>{
            state.count=0
        },
        decrement:(state)=>{
            state.count=state.count-1
        },
        incrementByAmount:(state,action)=>{
            state.count+=action.payload
        }
    }
})


// to export action to dispatch them
export const{increment,reset,decrement,incrementByAmount} = counterSlice.actions

//to export reducer
export default counterSlice.reducer