import React from "react";

function Subtotal() {
  return (
    <div className="subtotal">
      <p>
        Subtotal(0 items):
        <strong> £0</strong>
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
