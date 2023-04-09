import React from "react";

function CheckoutAd() {
  return (
    <div className="checkout__ad">
      <img
        src="https://m.media-amazon.com/images/G/02/AMS/desktop/C1_CARD_FLAT_SHADOW._CB633741987_.png"
        alt=""
      />
      <section className="checkout__adText">
        <p className="checkout__adFirstText">
          Looking for a credit card? Ours comes with an award-winning app.
        </p>
        <p className="checkout__adSecondText">
          Amazon EU S.a.r.l is the credit broker. Capital One is the lender.
        </p>
      </section>
      <button>Check now</button>
    </div>
  );
}

export default CheckoutAd;
