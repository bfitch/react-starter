import React from "react";
import Router from "react-router";
import {Decorator as Cerebral} from 'cerebral-react-immutable-store';

@Cerebral({
  messages: ['messages']
})
export default class App extends React.Component {
  componentDidMount() {
    this.props.signals.appMounted();
  }

  render() {
    return (
      <ul>
        {this.props.messages.map((message) => <li key={message.id}>{message.title}</li>)}
      </ul>
    );
  }
}
