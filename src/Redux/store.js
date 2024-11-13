import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './slice/counterSlice'

export const stores= configureStore({
     reducer:{
        counterReducer:counterSlice
     }
})