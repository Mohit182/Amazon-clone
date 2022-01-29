import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "../../Assets/search.svg";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";
import Web from "./Web/Web";
import Mobile from "./Mobile/Mobile";
import menuIcon from "../../Assets/menu.svg";
function Header() {
  const [{ user }, dispatch] = useStateValue();
  const [isOpen, setIsOpen] = useState(false);
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          onClick={() => {
            setIsOpen(false);
          }}
          className="header-logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <img src={SearchIcon} className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div
            onClick={() => {
              handleAuthentication();
              setIsOpen(false);
            }}
            className="header-option"
          >
            <span className="header-optionLineOne">
              Hello {user ? `${user?.email}` : "Guest"}
            </span>
            <span className="header-optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="web">
          <Web />
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className="header-menuIcon">
          <img src={menuIcon}></img>
        </div>
        <div className="mobile">
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
