import React from "react";
import LocalStorage from "/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/LocalStorage.js";
import { useDispatch } from 'react-redux';
import { 
  increment,
  selectQuantity,
} from '../redux/counterSlice';
import { 
  addToCart,
} from '../redux/cartSlice';



const Gear = () => {
  // const [itemCount, setItemCount] = useState(0);
  // // onClick = {() => setCount(count - 1)}
  const dispatch = useDispatch();
  console.log(selectQuantity);

  const addProductToCart = (product) => {
    console.log(product);
    dispatch(increment());
    dispatch(addToCart(product));
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
      <div className="container mx-auto container_gear" style = {{width: '100vw'}}>
        <div className="row">
          {LocalStorage.map((product) => {
            return (
              <div class="card mx-3 my-3" style={{ width: "18rem" }}>
                <img
                  class="card-img-top"
                  src= {product.image}
                  alt={product.title}
                />
                <div class="card-body">
                  <h5 class="card-title">{product.name}</h5>
                  <p class="card-text">
                    {product.description}
                  </p>
                  <button class="btn btn-success mx-2" onClick = {() => {addProductToCart(product)}}>Add to Cart</button>
                  <button class="btn btn-primary mx-2" > Wishlist </button>
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
