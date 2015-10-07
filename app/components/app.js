import React from 'react';
import {Decorator as Cerebral} from 'cerebral-react';
import '../styles/app.css';

@Cerebral({
  currentUser: ['currentUser'],
  url: ['url']
})
class App extends React.Component {
  loginClicked(event) {
    this.props.signals.loginClicked();
  }

  fullName() {
    return `${this.props.currentUser.first_name} ${this.props.currentUser.last_name}`;
  }

  render() {
    return (
      <div>
        <nav className="navbar row">
          <div className="hamburger u-pull-left"><i className="fa fa-bars fa-color-white fa-2x"></i></div>
          <div className="createTransaction u-pull-right"><i className="fa fa-plus-square fa-color-white fa-2x"></i></div>
        </nav>
        <div className="row">
          <p>{this.fullName()}</p>
          <p>{this.props.currentUser.email}</p>
        </div>
        <div className="row">
          <button onClick={this.loginClicked.bind(this)}>Login</button>
        </div>
      </div>
    );
  }
}

export default App;
