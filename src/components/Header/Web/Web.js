import React from "react";
import "./Web.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../../StateProvider";
import CartIcon from "../../../Assets/cart.png";
function Web() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="web">
      <Link to="/orders">
        <div className="header-option">
          <span className="header-optionLineOne">Returns</span>
          <span className="header-optionLineTwo">& Orders</span>
        </div>
      </Link>
      {/* <div className="header-option">
        <span className="header-optionLineOne">Your</span>
        <span className="header-optionLineTwo">Prime</span>
      </div> */}

      <Link to="/checkout">
        <div className="header-optionBasket">
          <img src={CartIcon} className="header-basketIcon" />
          <span className="header-optionLineTwo header-basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Web;
