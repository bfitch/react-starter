import React from "react";
import Router from "react-router";
import { App, About, Cool } from "./components/app.js";

const Route        = Router.Route;
const DefaultRoute = Router.DefaultRoute;

let routes = (
  <Route path="/" handler={App}>
    <Route name="about" handler={About}/>
    <Route name="cool" handler={Cool}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler/>, document.getElementById("app"));
});
