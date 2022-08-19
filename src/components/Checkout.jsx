import React from "react";
// import { useSelector } from 'react-redux';
import CartList from "../features/cart/cartList";
import { useSelector } from 'react-redux';
import { 
  SelectPrice, 
} from '../redux/cartSlice'

const Checkout = () => {
  return (
    <>
        <div className="container py-4">
        <div className="row">
          <div className="col"></div>
          <div>
            <h1>Cart</h1>
          </div>
          <hr></hr>
        </div>
      </div>
      <div
        className="container mx-auto container_gear d-flex justify-content-center"
        style={{ width: "100vw" }}
      >
        <div className="row">
          <CartList />
        </div>
        
      </div>
      <h3 className = {useSelector(SelectPrice) === 0 ? 'hidePrice' : ''}> Total Price: ${useSelector(SelectPrice)} </h3>
    </>
  );
};

export default Checkout;
