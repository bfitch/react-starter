import React from "react";
import Router from "react-router";
import {root} from "baobab-react/decorators";
import state from "../state";

const RouteHandler = Router.RouteHandler;
const Link         = Router.Link;

window.state = state.toJSON(); // for debugging

@root(state)
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1><Link to="/">App</Link></h1>
        <Link to="about">About</Link>

        <RouteHandler/>
      </div>
    );
  }
}
