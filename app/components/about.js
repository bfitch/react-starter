import React from "react";
import Router from "react-router";
import {branch} from "baobab-react/decorators";

const RouteHandler = Router.RouteHandler;
const Link         = Router.Link;

@branch({
  cursors: {
    messages: ["messages"]
  }
})
export default class About extends React.Component {
  render() {
    return (
      <div>
        <p>About Component</p>
        <ul>
          {this.props.messages.map(function(message) {
            return (
              <li><Link to="details" params={message}>{message.title}</Link></li>
              );
            })
          }
        </ul>
        <RouteHandler/>
      </div>
    );
  }
}
