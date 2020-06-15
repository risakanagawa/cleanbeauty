import React, { useState } from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./common.scss";

const Nav = ({ count }) => {
  const [active, toggleActive] = useState(false);
  const clickedMenu = () => toggleActive(!active);
  return (
    <div className="header">
      <div className="header__body">
        <div className="header__body--title">
          <img className="logo" src={logo} alt="logo" />
          <a href="/" onClick={() => toggleActive(false)}>
            <h2>CLEAN BEAUTY</h2>
          </a>
        </div>
        <section className="hamburger" onClick={clickedMenu}>
          <div
            className={active ? "active btn-trigger" : "btn-trigger"}
            id="btn01"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>
        <div
          className={
            active ? "navigation active" : "header__body--nav navigation"
          }
        >
          <ul className="navigation__main">
            <Link to="/news" onClick={clickedMenu}>
              <li>News</li>
            </Link>
            <Link to="/concept" onClick={clickedMenu}>
              <li>CONCEPT</li>
            </Link>

            <li className="navigation__product">
              <label htmlFor="label1">
                <Link to="/shop"  onClick={clickedMenu}>
                  <span> PRODUCTS</span>
                </Link>
              </label>
              <input type="checkbox" id="label1" />
              <div className="navigation__product--link">
                <Link to="/shop/makeup"  onClick={clickedMenu}>
                  <span> MAKEUP</span>
                </Link>
                <Link to="/shop/skincare"  onClick={clickedMenu}>
                  <span> SKIN CARE</span>
                </Link>
                <Link to="/shop/bodycare"  onClick={clickedMenu}>
                  <span> BODY CARE</span>
                </Link>
                <Link to="/shop/others"  onClick={clickedMenu}>
                  <span> OTHERS</span>
                </Link>
                <Link to="/shop/shopall"  onClick={clickedMenu}>
                  <span> ALL</span>
                </Link>
              </div>
            </li>
            <Link to="/findus" onClick={clickedMenu}>
              <li>FIND US</li>
            </Link>

            <Link to="/shoppingcart">
              <li>
                <FontAwesomeIcon icon={["fas", "shopping-bag"]} size="1x" />(
                {count})
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { count: state.shoppingCart.count };
};

export default connect(mapStateToProps)(Nav);
