import React from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./common.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="company-info">
        <ul>
          <li>NEWS</li>
          <li>
            <Link to="/concept">CONCEPT</Link>
          </li>
          <li>PRODUCTS</li>
          <li>FIND US</li>
          <li>SHIPPING POLICY</li>
        </ul>
        <div className="sns-icons">
          <ul>
            <li>
              <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
            </li>
            <li>
              <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
            </li>
            <li>
              <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
            </li>
          </ul>
        </div>
      </div>
      <div className="e-mail">
        <div className="email-box">
          <p>Subscribe and Get 15% off your first order.</p>
          <input placeholder="Email" type="text" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="company-name">
        <img className="logo" src={logo} alt="logo" /> <h2>CLEAN BEAUTY</h2>
      </div>
      <div className="right">
        <p>Copyright © RISA.</p>
        <p>This is a study project but All Rights Reserved.</p>
      </div>
    </div>
  );
}
