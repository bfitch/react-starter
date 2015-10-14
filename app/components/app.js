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
        <div className="conversations-list">
          {this.props.conversations.map((conversation) => <Conversation key={conversation.uid} conversation={conversation}/>)}
        </div>
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

@Cerebral({}, {
  isNew: ['isNewConversation']
})
class Conversation extends React.Component {
  render() {
    return (
      <div className="conversation-list__item__new-message">
        <div className="conversation-list__item__content">
          <div>{this.props.isNew ? "UNREAD" : "READ"}</div>
          <div className="conversation-list__item__subject">
            {this.props.conversation.subject}
          </div>
          <div className="conversation-list__item__participants">
            {/* {this.props.conversation.participantNames} */}
          </div>
        </div>

        <div className="conversation-list__item__messages-count">
          <div>{this.props.conversation.messages_count}</div>
        </div>
        <div className="conversation-list__item__created-at">
          <div>{this.props.conversation.latest_message.created_at}</div>
        </div>
      </div>
      /*
        <svg className="conversation-list__item__new-message__icon--unread"
             xmlns="http://www.w3.org/2000/svg"
             width="12"
             height="12"
             viewBox="0 0 8 8">
          <path d="M3 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" transform="translate(1 1)" />
        </svg>
      */       
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
