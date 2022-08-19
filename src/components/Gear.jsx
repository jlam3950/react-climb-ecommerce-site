import React from "react";
import LocalStorage from "/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/LocalStorage.js";
import { useDispatch } from 'react-redux';
import { FaHeart } from "react-icons/fa";
// import { SelectFav } from "../redux/cartSlice";
import { 
  addToCart,
  saveToFavorites,
} from '../redux/cartSlice';

const Gear = () => {
  // const [itemCount, setItemCount] = useState(0);
  // // onClick = {() => setCount(count - 1)}
  // const favQuantity = useSelector(SelectFav);
  const dispatch = useDispatch();
  
  const addProductToCart = (product) => {
    dispatch(addToCart(product));
  }

  const favoritesBtnEvent = (product) => {
    // let status = product.favorite;
    // product.favorite = !product.favorite;
    dispatch(saveToFavorites(product));
  }

  return (
    <div>
      <div className="container py-4">
        <div className="row">
          <div className="col"></div>
          <div>
            <h1>Essential Climbing Gear</h1>
          </div>
          <hr></hr>
        </div>
      </div>
      <div className="container mx-auto container_gear d-flex justify-content-center" style = {{width: '100vw'}}>
        <div className="row">
          {LocalStorage.map((product, idx) => {
            return (
              <div className="card mx-3 my-3" style={{ width: "18rem" }} key = {idx}>
                <img
                  className="card-img-top"
                  src= {product.image}
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <span><h6>price: {product.price} </h6> </span>
                  <p className="card-text">
                    {product.description}
                  </p>
                  <button className="btn btn-success mx-2" onClick = {() => {addProductToCart(product)}}>Add to Cart</button>
                  <button className="btn btn-primary mx-2" onClick = {() => {favoritesBtnEvent(product)}}> 
                  <FaHeart className = { product.favorite === true ? 'selected' : 'notSelected'}/></button>
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
