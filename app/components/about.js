import React from "react";
import Router from "react-router";
import {branch} from "baobab-react/decorators";
import {fetch, save, destroy} from "../baobab_rest";

const RouteHandler = Router.RouteHandler;
const Link         = Router.Link;

@branch({
  cursors: {
    messages: ["messages", "data"],
    isLoading: ["messages", "isLoading"]
  }
})
export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ""};
  }

  saveMessage(event) {
    event.preventDefault();
    fetch("messages");

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

        <ul style={this.props.isLoading ? {backgroundColor: "red"} : {}}>
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
