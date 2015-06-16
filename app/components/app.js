import React from "react";
import Router from "react-router";

const Link         = Router.Link;
const RouteHandler = Router.RouteHandler;

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>

        <ul>
          <li><Link to="about">About</Link></li>
          <li><Link to="cool">Cool</Link></li>
        </ul>

        <RouteHandler/>
      </div>
    );
  }
}

export class About extends React.Component {
  render() {
    return (
      <h1>About</h1>
    );
  }
}

export class Cool extends React.Component {
  render() {
    return (
      <h1>CCOOOOL</h1>
    );
  }
}
