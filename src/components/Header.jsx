import React from "react";
import { IoBasket } from "react-icons/io5";
import { MdStorefront } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <MdStorefront className="header__storeIcon" />
        <h2 className="header__logoTitle">Farzaneh's eShop</h2>
      </div>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <AiOutlineSearch className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <div className="nav__itemBasket">
          <IoBasket className="nav__basketIcon" />
          <span className="nav__itemLineTwo nav__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
