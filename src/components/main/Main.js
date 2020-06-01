import React from "react";
import { Link } from "react-router-dom";

import SNS from "./SNS";
import "./main.scss";
import row1 from "../../img/row-1.jpg";
import row2 from "../../img/row-2.jpg";
import row3 from "../../img/row-3.jpg";
import row4 from "../../img/row-4.jpg";

export default function Main() {
  return (
    <div>
      <div className="head-img"></div>
      <div className="news-box">
        <div className="news">
          <h2>S/S collection 2020</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>
          <button className="btn__hover">
            <Link to="/news"> MORE NEWS</Link>
          </button>
        </div>
      </div>
      <div className="products-box grid">
        <div className="product col-4">
          <img src={row1} alt="makeup" />
          <h2>MAKE UP</h2>
        </div>
        <div className="col-4">
          <img src={row2} alt="skincare" />
          <h2>SKIN CARE</h2>
        </div>
        <div className="col-4">
          <img src={row3} alt="others" />
          <h2>OTHERS</h2>
        </div>
        <div className="col-4">
          <img src={row4} alt="others" />
          <h2> <Link to="/shop">SHOP ALL</Link></h2>
        </div>
      </div>
      <div className="concept">
        <div className="concept-child left"></div>
        <div className="concept-child right">
          <h2>THIS IS US</h2>
          <p>
            We believe cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          </p>
          <span className="btn__hover">
            <a href="/concept">READ MORE </a>
          </span>
        </div>
      </div>
      <SNS />
    </div>
  );
}
