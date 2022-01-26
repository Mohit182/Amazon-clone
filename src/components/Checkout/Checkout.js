import React from "react";
import "./Checkout.css";
import amazonBanner from "../../Assets/amazon-banner.jpg";
import Subtotal from "./Subtotal/Subtotal";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img className="checkout-ad" src={amazonBanner} alt="" />
        <div>
          <h2 className="checkout-title">Your Shopping Basket</h2>
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
