import React from "react";
import Router from "react-router";
import { root } from "baobab-react/decorators";
import state from "../state";

const Link         = Router.Link;
const RouteHandler = Router.RouteHandler;

@root(state)
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>

        <ul>
          <li><Link to="about">About</Link></li>
        </ul>

        <RouteHandler/>
      </div>
    );
  }
}
