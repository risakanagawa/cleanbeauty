import React from "react";

//media
import header from "../../img/toppage-header.jpg";

const ShopTopPage = () => {
  return (
    <div className="products__top">
      <div className="products__top--header">
        <h2>We believe the power of nature makes us more beautiful.</h2>

        <img src={header} alt="products page header" />
        <div className="products__top--header-text">
          <p>
            Our products are all vegan, blabla free, no animal testing. Vivamus
            sem ante, feugiat in magna eget, gravida lobortis lorem. Curabitur
            malesuada sodales massa, Pellentesque ac velit non libero semper
            lobortis at vel mi. Quisque tincidunt quam a nisi dictum, ut
            volutpat urna pretium. ut commodo odio pharetra eu. Pellentesque ac
            velit non libero semper lobortis at vel mi. Quisque tincidunt quam a
            nisi dictum, ut volutpat urna pretium. Pellentesque ac velit non
            libero semper lobortis at vel mi. Quisque tincidunt quam a nisi
            dictum, ut volutpat urna pretium. Enjoy!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopTopPage;
