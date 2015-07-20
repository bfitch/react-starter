import React from "react";
import {branch} from "baobab-react/decorators";

@branch({
  cursors: {
    messages: ["messages"]
  }
})
export default class Details extends React.Component {
  render() {
    return (
      <div>
        <h1>Message</h1>
        <p>{this.props.params.title}</p>
      </div>
    );
  }
}
