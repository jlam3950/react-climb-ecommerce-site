import { createSlice } from "@reduxjs/toolkit";
// import { combineReducers } from "@reduxjs/toolkit";

const initialState = {
 cart: [],
 totalPrice: 0, 
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((x) => x.id !== action.payload.id)
      console.log(action.payload.price);
      state.totalPrice -= action.payload.price;
    },
  }
});

export const SelectPrice = (state) => state.cartContainer.totalPrice;
export const SelectCart = (state) => state.cartContainer.cart;
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
