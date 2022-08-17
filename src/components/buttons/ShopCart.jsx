import React from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { selectQuantity } from "../../redux/counterSlice";

const ShopCart = () => {
  const quantity = useSelector(selectQuantity);

  const quantityCheck = (amount) => (amount === 0 ? "" : (`(${quantity})`));

  return (
    <>
      <button type="button" className="btn btn-light mx-3">
        {" "}
        <NavLink className="nav-link" to="/checkout">
          <FaShoppingCart />
          <span className="mx-1">{quantityCheck(quantity)}</span>
        </NavLink>
      </button>
    </>
  );
};
console.log(selectQuantity);
export default ShopCart;
