import React from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { SelectCount } from "../../redux/cartSlice";

const ShopCart = () => {
  const quantity = useSelector(SelectCount);

  const quantityCheck = (amount) => (amount === 0 ? "" : (`(${quantity})`));

  return (
    <>
      <button type="button" className="btn btn-light px-3">
        {" "}
        <NavLink className="nav-link" to="/checkout">
          <FaShoppingCart />
          <span className="mx-1">{quantityCheck(quantity)}</span>
        </NavLink>
      </button>
    </>
  );
};
export default ShopCart;
