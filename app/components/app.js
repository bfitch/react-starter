import React from "react";
import { RouteHandler } from "react-router";

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
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

export class Users extends React.Component {
  render() {
    return (
      <h1>Users</h1>
    );
  }
}

export class NoMatch extends React.Component {
  render() {
    return (
      <h1>No MATCH</h1>
    );
  }
}
