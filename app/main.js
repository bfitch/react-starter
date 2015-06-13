import React from "react";
import Router from "react-router";
import { App, About, Users, NoMatch } from "./components/app.js";

const Route        = Router.Route;
const DefaultRoute = Router.DefaultRoute;

let routes = (
  <Route path="/" handler={App}>
    <Route path="about" handler={About}/>
    <Route path="users" handler={Users}/>
    <DefaultRoute handler={NoMatch}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById("app"));
});
