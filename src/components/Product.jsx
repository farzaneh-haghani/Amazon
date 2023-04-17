import React, { useContext } from "react";
import AppContext from "./Context";

function Product(props) {
  const { basket, setBasket } = useContext(AppContext);
  const { id, title, price, rateNum, src } = props;

  const addToBasket = () => {
    setBasket([props, ...basket]);
  };
  let rate = "";
  for (let i = 0; i < rateNum; i++) {
    rate += "⭐️";
    /* CTRL + CMD + Space */
  }

  return (
    <div className="product" key={id}>
      <div className="product__info">
        <p className="product__title">{title}</p>
        <small>£</small>
        <strong>{price}</strong>
        <div className="product__rating">{rate}</div>
      </div>
      <img src={src} alt="product-images" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
