import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'cerebral-router';
import {Container} from 'cerebral-react';
import controller from './controller';
import App from './components/app';
import {setCurrentUser, setConversations, setError} from './actions/state';
import {login, verifyToken, loadAccessToken, setAccessToken, getUserData, getAccessToken, setAjaxBearerToken} from './actions/auth';
import {fetchConversations} from './actions/api';

let loadAccessTokenAction = [
  loadAccessToken, {
    tokenFound: [
      [verifyToken, {
        tokenInvalid: [Router.redirect('/login')],
        tokenValid: [
          setAjaxBearerToken,
          [getUserData, {
            success: [setCurrentUser],
            error: [setError]
          }],
          Router.redirect('/my-conversations')
        ],
        error: [setError]
      }]
    ],
    tokenNotFound: [Router.redirect('/login')]
  }
]

let getAccessTokenAction = [
  getAccessToken, {
    success: [
      setAccessToken,
      Router.redirect('/')
    ],
    error: [setError]
  }
]

let myConversationsAction = [
  fetchConversations, {
    success: [setConversations],
    error: [setError]
  }
]

controller.signal('rootRouted', loadAccessTokenAction);
controller.signal('loginRouted', login);
controller.signal('oauthdCallbackRouted', getAccessTokenAction);
controller.signal('myConversationsRouted', myConversationsAction);

Router(controller, {
  '/':               'rootRouted',
  '/login':          'loginRouted',
  '/oauthd_callback': 'oauthdCallbackRouted',
  '/my-conversations': 'myConversationsRouted'
}).trigger();

ReactDOM.render(
  <Container controller={controller}>
    <App/>
  </Container>,
  document.getElementById('app')
);
