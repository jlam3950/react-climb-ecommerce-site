import { createSlice } from "@reduxjs/toolkit";
// import { combineReducers } from "@reduxjs/toolkit";

const initialState = {
 cart: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log(action.payload);
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {

    },
  }
});

export const selectCart = (state) => state.cartContainer.cart;
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
