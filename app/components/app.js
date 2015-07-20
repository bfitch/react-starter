import React from "react";
import Router from "react-router";
import {root} from "baobab-react/decorators";
import state from "../state";
import ajax from "axios";

const RouteHandler = Router.RouteHandler;
const Link         = Router.Link;

window.state = state; // for debugging

ajax.get("http://localhost:8081/api")
  .then((response) => {
    console.log(response.data);
    state.set("messages", response.data.messages);
  })
  .catch((response) => {
    console.log(response.status);
  });

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
