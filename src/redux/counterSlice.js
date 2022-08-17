import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count: 0,
}

export const quantitySlice = createSlice({
    name: 'quantity',
    initialState,
    reducers: {
        increment(state){
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
    }
});

export const selectQuantity = (state) => state.quantity.count;
export const { increment, decrement } = quantitySlice.actions;
export default quantitySlice.reducer;