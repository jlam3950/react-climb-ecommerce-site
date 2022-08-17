import React from 'react';
import { useSelector } from "react-redux";
import { selectCart } from '../../redux/cartSlice';

const CartList = () => {
    const cart = useSelector(selectCart);

    return (
      cart.map(product => {
        return (
          <div class="card mx-3 my-3" style={{ width: "18rem" }}>
          <img
            class="card-img-top"
            // src= {product.image}
            alt={product.title}
          />
          <div class="card-body">
            <h5 class="card-title">{product.name}</h5>
            <p class="card-text">
              {product.description}
            </p>
            <button class="btn btn-danger mx-2">Remove</button>
          </div>
        </div>
        )
      })
    )
}

export default CartList;