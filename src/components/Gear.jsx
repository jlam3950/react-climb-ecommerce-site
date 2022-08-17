import React from "react";
import LocalStorage from "/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/LocalStorage.js";
import { useDispatch, useSelector } from 'react-redux';
import { 
  increment,
  // selectQuantity,
} from '../redux/counterSlice';
import { 
  addToCart,
  SelectPrice, 
} from '../redux/cartSlice';
// import { nanoid } from '@reduxjs/toolkit';


const Gear = () => {
  // const [itemCount, setItemCount] = useState(0);
  // // onClick = {() => setCount(count - 1)}
  const dispatch = useDispatch();
  
  const addProductToCart = (product) => {
    // product.id = nanoid();

    dispatch(increment());    
    dispatch(addToCart(product));
  }

  return (
    <div>
      <div className="container py-4">
        <div className="row">
          <div className="col"></div>
          <div>
            <h1>Essential Climbing Gear</h1>
          </div>
          <hr></hr>
        </div>
      </div>
      <div className="container mx-auto container_gear" style = {{width: '100vw'}}>
        <div className="row">
          {LocalStorage.map((product) => {
            return (
              <div class="card mx-3 my-3" style={{ width: "18rem" }}>
                <img
                  class="card-img-top"
                  src= {product.image}
                  alt={product.title}
                />
                <div class="card-body">
                  <h5 class="card-title">{product.name}</h5>
                  <span><h6>price: {product.price} </h6> </span>
                  <p class="card-text">
                    {product.description}
                  </p>
                  <button class="btn btn-success mx-2" onClick = {() => {addProductToCart(product)}}>Add to Cart</button>
                  <button class="btn btn-primary mx-2" > Wishlist </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gear;
