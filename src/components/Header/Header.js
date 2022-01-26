import React from "react";
import "./Header.css";
import SearchIcon from "../../Assets/search.svg";
import CartIcon from "../../Assets/cart.png";
function Header() {
  return (
    <div className="header">
      <img
        className="header-logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <img src={SearchIcon} className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <div className="header-option">
          <span className="header-optionLineOne">Hello Guest</span>
          <span className="header-optionLineTwo">Sign In</span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">Returns</span>
          <span className="header-optionLineTwo">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
        <div className="header-optionBasket">
          <img src={CartIcon} className="header-basketIcon" />
          <span className="header-optionLineTwo header-basketCount">
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
