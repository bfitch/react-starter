import React from 'react';
import {Decorator as Cerebral} from 'cerebral-react';
import mui from 'material-ui';
const ThemeManager = new mui.Styles.ThemeManager();
const RaisedButton = mui.RaisedButton;
const AppBar       = mui.AppBar;

@Cerebral({
  messages: ['messages']
})
class App extends React.Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <div>
        <AppBar title="Title" />
        <RaisedButton label="Super Secret Password" primary={true} />
        <ul>
          {this.props.messages.map((message) => <li>{message.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
