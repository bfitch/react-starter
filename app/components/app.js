import React from 'react';
import {Decorator as Cerebral} from 'cerebral-react';

@Cerebral({
  messages: ['messages']
})
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          {this.props.messages.map((message) => <li>{message.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
