import React from "react";
import { useRouteMatch, Link } from "react-router-dom";


//media
import header from "../../img/toppage-header.jpg";
import row1 from "../../img/row-1.jpg";
import row2 from "../../img/row-2.jpg";
import row3 from "../../img/row-3.jpg";
import row4 from "../../img/row-4.jpg";

const links = [
  { image: row1, route: "makeup", text: "MAKEUP" },
  { image: row2, route: "skincare", text: "SKIN CARE" },
  { image: row3, route: "others", text: "BODYCARE" },
  { image: row4, route: "shopall", text: "OTHERS" },
];

const ShopTopPage = () => {
    const { url } = useRouteMatch();

  return (
    <div className="products__top">
      <div className="products__top--header">
      <h2>We believe the power of nature makes us more beautiful.</h2>

        <img src={header} alt="products page header" />
        <div className="products__top--header-text">
          <p>
            Our products are all vegan, blabla free, no animal testing.
            Vivamus sem ante, feugiat in magna eget, gravida lobortis lorem.
            Curabitur malesuada sodales massa, Pellentesque ac velit non libero semper lobortis at vel mi. Quisque
            tincidunt quam a nisi dictum, ut volutpat urna pretium. ut commodo odio pharetra eu.
            Pellentesque ac velit non libero semper lobortis at vel mi. Quisque
            tincidunt quam a nisi dictum, ut volutpat urna pretium. Pellentesque ac velit non libero semper lobortis at vel mi. Quisque
            tincidunt quam a nisi dictum, ut volutpat urna pretium. Enjoy!
          </p>
        </div>
      </div>
      <div className="products__top--link grid">
        {links.map(({image, route, text}) => {
          return (
            <div className="col-4" key={route}>
              <img src={image} alt={route} />
              <h2>
                <Link to={`${url}/${route}`}>{text}</Link>
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopTopPage;
