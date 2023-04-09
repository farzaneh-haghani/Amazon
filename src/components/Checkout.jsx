import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import CheckoutAd from "./CheckoutAd";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div>
        <Link
          to="https://www.amazon.co.uk/dp/B0BGZLKX3Q?RU=%2Fgp%2Fcart%2Fview.html"
          className="link"
        >
          <CheckoutAd />
        </Link>
        <div className="checkout__left">
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <CheckoutProduct />
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
