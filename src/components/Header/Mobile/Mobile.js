import React from "react";
import "./Mobile.css";
import CartIcon from "../../../Assets/cart.png";
import { useStateValue } from "../../../StateProvider";
import { Link } from "react-router-dom";

function Mobile({ isOpen, setIsOpen }) {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="mobile">

      <Link to="/orders">
        <div
          className="options"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span>Return & Orders</span>
        </div>
      </Link>

      {/* <div
        className="options"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>Your Prime</span>
      </div> */}

      <Link to="/checkout">
        <div
          className="options"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div className="header-optionBasket">
            <img src={CartIcon} className="header-basketIcon" />
            <span className="header-optionLineTwo header-basketCount">
              {basket?.length} item
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Mobile;
