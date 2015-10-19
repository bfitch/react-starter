import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'cerebral-router';
import {Container} from 'cerebral-react';
import controller from './controller';
import App from './components/app';
import {setCurrentUser, setConversations, setPracticeUsers, setPatients, setError} from './actions/state';
import {login, setAccessToken, getAccessToken} from './actions/auth';
import {fetchConversations, fetchPracticeUsers, fetchPatients} from './actions/api';
import loadAccessToken from './signals/loadAccessTokenSignal';

let getAccessTokenAction = [
  [getAccessToken, {
    success: [
      setAccessToken,
      Router.redirect('/')
    ],
    error: [setError]
  }]
]

let myConversationsAction = [
  [fetchConversations, {
    success: [setConversations],
    error: [setError]
  }]
]

let fetchPracticeUsersAction = [
  [fetchPracticeUsers, {
    success: [setPracticeUsers],
    error: [setError]
  }]
]

let fetchPatientsAction = [
  [fetchPatients, {
    success: [setPatients],
    error: [setError]
  }]
]

controller.signal('rootRouted', [...loadAccessToken, Router.redirect('/my-conversations')]);
controller.signal('loginRouted', [login]);
controller.signal('oauthdCallbackRouted', getAccessTokenAction);
controller.signal('myConversationsRouted', [...loadAccessToken, ...myConversationsAction, ...fetchPracticeUsersAction, ...fetchPatientsAction]);

Router(controller, {
  '/':                                            'rootRouted',
  '/login':                                       'loginRouted',
  '/oauthd_callback':                             'oauthdCallbackRouted',
  '/my-conversations':                            'myConversationsRouted',
  // '/my-conversations/:conversation_uid/messages': 'messagesRouted'
}).trigger();

ReactDOM.render(
  <Container controller={controller}><App/></Container>,
  document.getElementById('app')
);
