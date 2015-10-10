import React from 'react';
import {Decorator as Cerebral} from 'cerebral-react';
// import '../styles/app.css';

@Cerebral({
  url: ['url']
})
class App extends React.Component {
  renderPage() {
    switch (this.props.url) {
      case '/my-conversations':
        return <ConversationList/>;
    }
  }

  render() {
    return (
      <div>
        {this.renderPage()}
      </div>
    );
  }
}

@Cerebral({
  conversations: ['conversations']
})
class ConversationList extends React.Component {
  renderConversations() {
    if (this.props.conversations) {
      return (
        <ul>
        {this.props.conversations.map((conversation) => <Conversation conversation={conversation}/>)}
        </ul>
      );
    } else {
      return (
        <div className="no-conversations-to-display">
          <p>No conversations to display</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Toolbar/>
        <div className="conversations-list">
          {this.renderConversations()}
        </div>
      </div>
    );
  }
}

class Conversation extends React.Component {
  render() {
    return (
      <li>{this.props.conversation.subject}</li>
    );
  }
}

class Toolbar extends React.Component {
  render() {
    return (
      <div className="toolbar">
      {/*
        {{ember-selectize
          content=controller.practiceUsers
          optionValuePath="content.uid"
          optionLabelPath="content.full_name"
          selection=selectedPracticeUser}}

        <div class="toolbar__search-tip">
          <div class="toolbar__search-tip__flex"></div>
          <p>
            Tip: Press the delete key to clear the selected name and search for a different staff member
          </p>
        </div>
      */}
      </div>
    );
  }
}

export default App;
