import React, { useContext } from "react";
import AppContext from "./Context";

function Subtotal() {
  const { basket } = useContext(AppContext);
  const subtotal = basket.reduce(
    (total, eachItem) => total + eachItem.price,
    0
  );
  return (
    <div className="subtotal">
      <p>
        Subtotal({basket.length} items):
        <strong> £{subtotal}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" name="" id="subtotal__input" />
        <label htmlFor="subtotal__input">his order contains a gift</label>
      </small>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
