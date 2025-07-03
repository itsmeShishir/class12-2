import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState, 
    reducers: {
        incValue:(state) => {
            state.value += 1
        }, 
        decValue:(state) => {
            state.value -= 1
        }
    }
})

export const {incValue, decValue} = counterSlice.actions;
export default counterSlice.reducer;

