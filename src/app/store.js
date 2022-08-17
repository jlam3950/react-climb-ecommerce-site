import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice";
import quantityReducer from '../redux/counterSlice';


export default configureStore({
  reducer:{
    quantity: quantityReducer,
    cartContainer: cartReducer,
  }
})


