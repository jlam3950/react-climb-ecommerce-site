import React from "react";
import CartList from "../features/cart/cartList";
import { useSelector } from "react-redux";
import { SelectPrice } from "../redux/cartSlice";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Checkout = () => {
  let price = useSelector(SelectPrice);
  let client_id = process.env.REACT_APP_CLIENT_ID;
  console.log(useSelector(SelectPrice));

  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col"></div>
          <div>
            <h1>Cart</h1>
          </div>
          <hr></hr>
        </div>
      </div>
      <div
        className="container mx-auto container_gear d-flex justify-content-center"
        style={{ width: "100vw" }}
      >
        <div className="row justify-content-center">
          <CartList />
        </div>
      </div>
      <h3 className={useSelector(SelectPrice) === 0 ? "hidePrice" : ""}>
        {" "}
        Total Price: ${useSelector(SelectPrice).toFixed(2)}{" "}
      </h3>
      <div className="checkout_payment mx-auto my-3">
        <div></div>
        <PayPalScriptProvider options={client_id} forceReRender={price}>
          <PayPalButtons
            forceReRender={price}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: price, 
                    },
                  },
                ],
              });
            }}
            onApprove={async (data, actions) => {
              const details = await actions.order.capture();
              const name = details.payer.name.given_name;
              alert("Thanks for your purchase, " + name);
            }}
          />
        </PayPalScriptProvider>
      </div>
    </>
  );
};

export default Checkout;
