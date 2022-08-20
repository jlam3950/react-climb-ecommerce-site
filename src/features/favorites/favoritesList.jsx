import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, SelectFavList, removeFromFavorites } from "../../redux/cartSlice";


const FavoriteList = () => {
  const list = useSelector(SelectFavList);
  const dispatch = useDispatch();

  const addProductToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(removeFromFavorites(product));
  }

  const emptyFavorite= (product) => {
    dispatch(removeFromFavorites(product));
  };

  return list.map((product) => {
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
          <button className="btn btn-success mx-2" onClick = {() => {addProductToCart(product)}}>
              Add to Cart
              </button>
          <button class = 'btn btn-danger' onClick={() => dispatch(emptyFavorite(product))}>
              Remove 
            </button>
          </div>
        </div>
      </div>
    );
  });
};

export default FavoriteList;
