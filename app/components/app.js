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

class ConversationList extends React.Component {
  render() {
    return (
      <div>
        <Toolbar/>
        <div className="conversations-list">
          <p>Conversation List</p>
          {/*
          {{#if model.length}}
            {{#each}}
              {{partial 'conversation'}}
            {{/each}}
          {{else}}
            <div class="no-conversations-to-display">
              <p>No conversations to display</p>
            </div>
          {{/if}}
        */}
        </div>
      </div>
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
