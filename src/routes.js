import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import MainPage from "./components/pages/MainPage";
import FoodDetailPage from "./components/pages/FoodDetailPage";
import LoginPage from "./components/pages/LoginPage";
import ProfilePage from "./components/pages/ProfilePage";
import SearchPage from "./components/pages/SearchPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/food/:slug" component={FoodDetailPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/search" component={SearchPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
