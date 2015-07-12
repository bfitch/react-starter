import React from "react";
import {branch} from "baobab-react/decorators";

@branch({
  cursors: {
    activeRoute: ["route"]
  }
})
export default class Details extends React.Component {
  render() {
    return (
      <div>
        <h1>Details</h1>
        <p>{this.props.route.params.name}</p>
      </div>
    );
  }
}
