import React from "react";
import { NavLink } from 'react-router-dom';
import ShopCart from './buttons/ShopCart';
import FavoritesBtn from './buttons/FavoritesBtn';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {

  return (
    <>
    <Navbar bg="light" expand="xl" className = 'mx-0 row'>
      <Container className = 'mx-0'>
        <Navbar.Brand>
        <>
          <NavLink className= "navbar-brand fw-bold rightNav" to="/">
            <>Climb Shop</>
          </NavLink>
          <ShopCart /> 
          <FavoritesBtn />
        </>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/about">
                About
            </NavLink>
            <NavLink className="nav-link" to="/contact">
                Contact
            </NavLink>
            <NavLink className="nav-link" to="/gear">
                Shop
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      {/* <nav className="navbar navbar-expand-lg navbar-light bg-lights py-1 px-3">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" onClick = {() => clickToggle()}></span>
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
        <div className = { hideTitle === true ? 'rightNav_hide' : ''}>
          <NavLink className= "navbar-brand fw-bold rightNav" to="/">
            <>Climb Shop</>
          </NavLink>
          <ShopCart /> 
          <FavoritesBtn />
        </div>
      </nav> */}
    </>
  );
};

export default NavBar;
