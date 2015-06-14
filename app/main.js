import React from "react";
import Router from "react-router";
import App from "./components/app.js";

const Route        = Router.Route;
const DefaultRoute = Router.DefaultRoute;

let routes = (
  <Route path="/" handler={App}>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById("app"));
});
