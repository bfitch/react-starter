import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'cerebral-router';
import {Container} from 'cerebral-react';
import controller from './controller';
import App from './components/app';
import {loadMessages} from './actions/api';
import {setCurrentUser, setMessages, setError, setMessageText} from './actions/state';
import {login, verifyToken, loadAccessToken, setAccessToken, getUserData, getAccessToken} from './actions/auth';

let loadAccessTokenAction = [
  loadAccessToken, {
    tokenFound: [
      [verifyToken, {
        tokenInvalid: [
          Router.redirect('/login')
        ],
        tokenValid: [
          [getUserData, {
            success: [setCurrentUser],
            error: [setError]
          }]
        ],
        error: [setError]
      }]
    ],
    tokenNotFound: [
      Router.redirect('/login')
    ]
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

controller.signal('rootRouted', loadAccessTokenAction);
controller.signal('loginRouted', login);
controller.signal('oauthdCallbackRouted', getAccessTokenAction);

Router(controller, {
  '/':               'rootRouted',
  '/login':          'loginRouted',
  '/oauthd_callback': 'oauthdCallbackRouted'
}).trigger();

ReactDOM.render(
  <Container controller={controller} app={App}/>,
  document.getElementById('app')
);
