import React from 'react';
import mui from 'material-ui';
const ThemeManager = new mui.Styles.ThemeManager();
const RaisedButton = mui.RaisedButton;
const AppBar       = mui.AppBar;

class App extends React.Component {
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
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default App;
