import React from "react";
import { useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { SelectFav } from "../../redux/cartSlice";

const FavoritesBtn = () => {
  const favQuantity = useSelector(SelectFav);
  const quantityCheck = (amount) => (amount === 0 ? "" : (`(${favQuantity})`));

  return (
    <>
      <button className="btn btn-light px-2">
        <NavLink className="nav-link" to="/favorites">
          <FaHeart className/>
          <span className="mx-1">{quantityCheck(favQuantity)}</span>
        </NavLink>
      </button>
    </>
  );
};
export default FavoritesBtn;
