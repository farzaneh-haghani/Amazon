import React, { useContext } from "react";
import { IoBasket } from "react-icons/io5";
import { MdStorefront } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import AppContext from "./Context";

function Header() {
  const { basket } = useContext(AppContext);

  return (
    <div className="header">
      <Link to="/" className="link">
        <div className="header__logo">
          <MdStorefront className="header__storeIcon" />
          <h2 className="header__logoTitle">Farzaneh's eShop</h2>
        </div>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <AiOutlineSearch className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="link">
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/checkout" className="link">
          <div className="nav__item">
            <span className="nav__itemLineOne">Your</span>
            <span className="nav__itemLineTwo">Shop</span>
          </div>
        </Link>
        <Link to="/checkout" className="link">
          <div className="nav__itemBasket">
            <IoBasket className="nav__basketIcon" />
            <span className="nav__itemLineTwo nav__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
