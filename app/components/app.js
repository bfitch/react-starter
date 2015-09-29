import React from 'react';
import {Decorator as Cerebral} from 'cerebral-react';
import '../styles/app.css';

@Cerebral({
  messages: ['messages'],
  currentUser: ['currentUser']
})
class App extends React.Component {
  viewMessagesClicked(event) {
    this.props.signals.viewMessagesClicked();
  }

  render() {
    return (
      <div>
        <nav className="navbar row">
          <div className="hamburger u-pull-left"><i className="fa fa-bars fa-color-white fa-2x"></i></div>
          <div className="createTransaction u-pull-right"><i className="fa fa-plus-square fa-color-white fa-2x"></i></div>
        </nav>
        <div className="row">
          <input className="six columns offset-by-three new-transaction" type="text"/>
        </div>
        <div className="row">
          <button onClick={this.viewMessagesClicked.bind(this)}>View Messages</button>
        </div>
        <div className="row">
          {this.props.currentUser.displayName}
        </div>
        <div className="list row">
          <ul>
            {this.props.messages.map((message) => <li key={message.id}>{message.title}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
