import React from "react";
import { NavLink } from 'react-router-dom';
import ShopCart from './buttons/ShopCart';
import FavoritesBtn from './buttons/FavoritesBtn';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid py-1 px-3">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/gear">
                Shop
              </NavLink>
            </li>
            
          </ul>
        </div>
        <NavLink className="navbar-brand fw-bold rightNav" to="#">
          <>Climb Shop</>
          <ShopCart /> 
          <FavoritesBtn />
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
