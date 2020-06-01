import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Items from "./Items";
import Item from "./Item";
import ShopTopPage from "./ShopTopPage";

const RightContainer = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}/:categoryId`} component={Items} />
      <Route exact path={`${path}/:categoryId/:id`} component={Item} />

      <Route exact path={path} component={ShopTopPage} />
    </Switch>
  );
};

export default RightContainer;
