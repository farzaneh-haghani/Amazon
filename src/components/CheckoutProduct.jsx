import React from "react";

function CheckoutProduct(props) {
  const { rateNum } = props;
  let rate = "";
  for (let i = 0; i < rateNum; i++) {
    rate += "⭐️";
  }
  return (
    <div className="checkoutProduct">
      <img
        src="https://m.media-amazon.com/images/I/31wE6PsBqeL._AC_SY460_.jpg"
        alt=""
        className="checkoutProduct__image"
      />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius,
          libero?
        </p>
        <p className="checkoutProduct__price">
          <small>£</small>
          <strong>11</strong>
        </p>
        <div className="checkoutProduct__rating">{rate}</div>
        <button>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
