import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const LeftContainer = () => {
  const { path, url } = useRouteMatch();

  return (
    <div className="products__container--left">
      <Link to={`${url}/skincare`}>Skincare</Link>
      <Link to={`${url}/bodycare`}>Bodycare</Link>
      <Link to={`${url}/others`}>Others</Link>
      <Link to={`${url}/shopall`}>SHOP ALL</Link>
    </div>
    
  );
};

export default LeftContainer;
