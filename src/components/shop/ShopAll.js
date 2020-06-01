import React from "react";
import NavProduct from "./Nav_Product";
import RightContainer from "./RightContainer";
import "./shop.scss";

const ShopAll = () => {
  return (
    <div className="products">

      <div className="products__container">
        <NavProduct />
        <RightContainer />
      </div>
    </div>
  );
};

export default ShopAll;
