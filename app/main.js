import React from "react";
import Router from "react-router";
import App from "./components/app";
import About from "./components/about";
import Details from "./components/details";
const Route = Router.Route;

let routes = (
  <Route path="/" handler={App}>
    <Route name="about" handler={About}>
      <Route name="details" path=":name" handler={Details}/>
    </Route>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler/>, document.getElementById("app"));
});
