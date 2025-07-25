import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice.js";
import cartReducer from "./cartSlice.js";

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        cart: cartReducer
    }
})