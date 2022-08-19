import { createSlice } from "@reduxjs/toolkit";
// import { combineReducers } from "@reduxjs/toolkit";

const initialState = {
 cart: [],
 favList: [], 
 totalPrice: 0,
 count: 0,
 favorites: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cart.find(
        product => product.id === action.payload.id
        )

      if(item){
        console.log(item.quantity);
        item.quantity += 1;
      }
      else if(!item){
        state.cart.push(action.payload);
        
      } 
      state.count += 1;
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const item = state.cart.find(
        product => product.id === action.payload.id
        )

      if(item){
        state.totalPrice -= action.payload.price * item.quantity;
        state.count -= 1 * item.quantity;
      } else {
        state.count -= 1;
      }
      
      state.cart = state.cart.filter((x) => x.id !== action.payload.id)
    },
    incrementQty: (state, action) => {
      const item = state.cart.find(
        product => product.id === action.payload.id
        )

      item.quantity += 1; 
      state.count += 1;
      state.totalPrice += action.payload.price
      },
    decrementQty: (state, action) => {
      const item = state.cart.find(
        product => product.id === action.payload.id
        )

      if(item){
        item.quantity -= 1;
        state.count -=1;
        state.totalPrice -= action.payload.price
      } 
      
      if (item.quantity === 0)
          state.cart = state.cart.filter((x) => x.id !== action.payload.id)
      },
      saveToFavorites: (state, action) => {
        const item = state.favList.find(
          product => product.id === action.payload.id
          )
  
        if(item){
          alert('This is already in the cart.');
          // state.favList.push(action.payload);
        }
        else if(!item){
          state.favList.push(action.payload);
          state.favorites += 1;
        } 
      },
      removeFromFavorites: (state, action) => {
        const item = state.favList.find(
          product => product.id === action.payload.id
          )
  
        if(item){
          state.favList = state.favList.filter((x) => x.id !== action.payload.id)
          state.favorites -=1;
        } 
      },
    }
  });

export const SelectFavList = (state) => state.cartContainer.favList;
export const SelectFav = (state) => state.cartContainer.favorites;
export const SelectCount = (state) => state.cartContainer.count;
export const SelectPrice = (state) => state.cartContainer.totalPrice;
export const SelectCart = (state) => state.cartContainer.cart;
export const { 
  addToCart, 
  removeFromCart, 
  incrementQty, 
  decrementQty,
  saveToFavorites,
  removeFromFavorites, 
} = cartSlice.actions;
export default cartSlice.reducer;
