import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainPage from "./components/pages/MainPage";
import FoodDetail from "./components/pages/FoodDetail";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/food/:id" component={FoodDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
