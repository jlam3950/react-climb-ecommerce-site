import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SelectCart } from "../../redux/cartSlice";
import { removeFromCart, decrementQty, incrementQty } from "../../redux/cartSlice";
import {
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const CartList = () => {
  const cart = useSelector(SelectCart);
  const dispatch = useDispatch();

  const removeProductFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return cart.map((product) => {
    return (
      <div className="card mx-3 my-3" style={{ width: "18rem" }}>
        <img className="card-img-top" src={product.image} alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <span>
            <h6>price: {product.price} </h6>{" "}
          </span>
          <p className="card-text card_description">{product.description}</p>
          <div>
          <button
            className="btn btn-danger mx-2"
            onClick={() => {
              removeProductFromCart(product);
            }}
          >
            Remove
          </button>
          <span className="item_counter">
          <button class = 'btn shadow-none btn-sm' onClick={() => dispatch(decrementQty(product))}>
              <FaMinus />
            </button>
            <span className="item_count">{product.quantity}</span>
            <button class = 'btn shadow-none btn-sm' onClick={() => dispatch(incrementQty(product))}>
              <FaPlus />
            </button>
          </span>
          </div>
        </div>
      </div>
    );
  });
};

export default CartList;
