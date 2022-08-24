import React, { useEffect, useState } from "react";
import LocalStorage from "../LocalStorage";
import { useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { addToCart, saveToFavorites } from "../redux/cartSlice";

const Gear = () => {
  const [searchProd, setSearchProd] = useState("");
  const [favColor, setfavColor] = useState(false);
  const dispatch = useDispatch();

  const addProductToCart = (product) => {
    dispatch(addToCart(product));
  };

  const favoritesBtnEvent = (product) => {
    setfavColor(!favColor);
    product.favorite = !product.favorite; 
    dispatch(saveToFavorites(product));
  };

  return (
    <div>
      <div className="container py-4">
        <div className="row">
          <div className="col"></div>
          <div>
            <h1>Essential Climbing Gear</h1>
          </div>
          <hr></hr>
          <input
            className="mx-auto"
            style={{ width: "50vw" }}
            type="text"
            placeholder="Search Products"
            onChange={(event) => {
              setSearchProd(event.target.value);
            }}
          ></input>
        </div>
      </div>
      <div
        className="container mx-auto container_gear d-flex justify-content-center"
        style={{ width: "100vw" }}
      >
        <div className="row">
          {LocalStorage.filter((input) => {
            if (searchProd === "") {
              return input;
            } else if (
              input.name.toLowerCase().includes(searchProd.toLowerCase())
            ) {
              return input;
            }
          }).map((product, idx) => {
            return (
              <div
                className="card mx-3 my-3"
                style={{ width: "18rem" }}
                key={idx}
              >
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <span>
                    <h6>price: {product.price} </h6>{" "}
                  </span>
                  <p className="card-text card_description">
                    {product.description}
                  </p>
                  <button
                    className="btn btn-success mx-2"
                    onClick={() => {
                      addProductToCart(product);
                    }}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      favoritesBtnEvent(product);
                    }}
                  >
                    <FaHeart
                      className={
                        product.favorite === true ? "selected" : "notSelected"
                      }
                    />
                  </button>
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
