import React from "react";
import Router from "react-router";
import {branch} from "baobab-react/decorators";
import {fetch, save} from "../baobab_rest";

const RouteHandler = Router.RouteHandler;
const Link         = Router.Link;

@branch({
  cursors: {
    messages: ["messages"]
  }
})
export default class About extends React.Component {
  constructor(args) {
    super(args);
    this.state = {title: ""};
  }

  saveMessage(event) {
    event.preventDefault();
    save("messages", { data: {title: this.state.title} });
    React.findDOMNode(this.refs.input).value = "";
  }

  getValue(event) {
    this.setState({title: event.target.value});
  }

  render() {
    return (
      <div>
        <p>About Component</p>

        <input type="text" onChange={this.getValue.bind(this)} ref="input" />
        <button onClick={e => this.saveMessage(e)}>Save</button>

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
