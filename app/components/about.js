import React from "react";
import Router from "react-router";
import {branch} from "baobab-react/decorators";

const RouteHandler = Router.RouteHandler;
const Link         = Router.Link;

@branch({
  cursors: {
    list: ["list"]
  }
})
export default class About extends React.Component {
  render() {
    return (
      <div>
        <p>About Component</p>
        <ul>
          {this.props.list.map(function(item) {
            return (
              <li><Link to="details" params={{name: item}}>{item}</Link></li>
              );
            })
          }
        </ul>
        <RouteHandler/>
      </div>
    );
  }
}
