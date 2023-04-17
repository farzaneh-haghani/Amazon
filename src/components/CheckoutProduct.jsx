import React, { useContext, useState } from "react";
import AppContext from "./Context";

function CheckoutProduct() {
  const { basket, setBasket } = useContext(AppContext);

  const remove = (id) => {
    const itemIndex = basket.findIndex((eachItem) => eachItem.id === id);
    basket.splice(itemIndex, 1);
    setBasket([...basket]);
  };

  return (
    <>
      {basket.map((eachItem) => {
        let rate = "";
        for (let i = 0; i < eachItem.rateNum; i++) {
          rate += "⭐️";
        }
        return (
          <div className="checkoutProduct">
            <img src={eachItem.src} alt="" className="checkoutProduct__image" />
            <div className="checkoutProduct__info">
              <p className="checkoutProduct__title">{eachItem.title}</p>
              <p className="checkoutProduct__price">
                <small>£</small>
                <strong>{eachItem.price}</strong>
              </p>
              <div className="checkoutProduct__rating">{rate}</div>
              <button onClick={() => remove(eachItem.id)}>
                Remove from Basket
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CheckoutProduct;
