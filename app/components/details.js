import React from "react";

export default class Details extends React.Component {
  render() {
    return (
      <div>
        <h1>Details</h1>
        <p>{this.props.params.name}</p>
      </div>
    );
  }
}
