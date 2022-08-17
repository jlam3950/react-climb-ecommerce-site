import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { SelectCart } from '../../redux/cartSlice';
import { 
  decrement,
} from '../../redux/counterSlice';
import { 
  removeFromCart,
} from '../../redux/cartSlice'; 


const CartList = () => {
    const cart = useSelector(SelectCart);
    const dispatch = useDispatch();

    const removeProductFromCart = (product) => {
      dispatch(decrement())
      dispatch(removeFromCart(product));
    }

    return (
      cart.map(product => {
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
            <button class="btn btn-danger mx-2" onClick = {() => {removeProductFromCart(product)}}>Remove</button>
          </div>
        </div>
        )
      })
    )
}

export default CartList;