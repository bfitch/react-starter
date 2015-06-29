import React from "react";
import { branch } from "baobab-react/decorators";

@branch({
  cursors: {
    list: ["list"]
  }
})
export default class About extends React.Component {
  renderList() {
    return this.props.list.map(item => <li>{item}</li>);
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}
