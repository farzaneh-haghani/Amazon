import React from "react";

function Product(props) {
  const { id, title, price, rateNum, src } = props;
  let rate = "";
  for (let i = 0; i < rateNum; i++) {
    rate += "⭐️";
    /* CTRL + CMD + Space */
  }
  return (
    <div className="product" key={id}>
      <div className="product__info">
        <strong>{title}</strong>
        <div>
          <small>£</small>
          <strong>{price}</strong>
        </div>

        <div className="product__rating">{rate}</div>
      </div>
      <img src={src} alt="product-images" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
