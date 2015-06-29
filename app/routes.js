import React from "react";
import Router from "react-router";
import App from "./components/app.js";
import About from "./components/about.js";

const Route        = Router.Route;
const DefaultRoute = Router.DefaultRoute;

export default (
  <Route path="/" handler={App}>
    <Route name="about" handler={About}/>
  </Route>
);

