import React from "react";
import { useRouteMatch, Link, useLocation } from "react-router-dom";

const NavProduct = () => {
  let { pathname } = useLocation();
  const { url } = useRouteMatch();
  const param = pathname.slice(6);

  const routes = [
    { route: "shopall", text: "Shop All" },
    { route: "makeup", text: "MAKEUP" },
    { route: "skincare", text: "SKIN CARE" },
    { route: "bodycare", text: "BODY CARE" },
    { route: "others", text: "OTHERS" },
  ];

  return (
    <div className="products__container--nav">
      <ul>
        {routes.map(({ route, text }) => {
          return (
            <li key={route}>
              <Link
                to={`${url}/${route}`}
                className={param === route ? "active" : null}
              >
                {text}
              </Link>
            </li>
          );
        })}
        {pathname !== "/shop" ? (
          <li className="last-li">
            <Link to={url}>SHOP TOP</Link>
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default NavProduct;
