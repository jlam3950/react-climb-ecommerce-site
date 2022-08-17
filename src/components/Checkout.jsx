import React from "react";
// import { useSelector } from 'react-redux';
import CartList from "../features/cart/cartList";
import { useDispatch, useSelector } from 'react-redux';
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
          <h3> Total Price: ${useSelector(SelectPrice)} </h3>
        </div>
      </div>
      <div
        className="container mx-auto container_gear"
        style={{ width: "100vw" }}
      >
        <div className="row">
          <CartList />
        </div>
      </div>
    </>
  );
};

export default Checkout;
