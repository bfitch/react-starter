import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'cerebral-router';
import {Container} from 'cerebral-react';
import controller from './controller';
import App from './components/app';
import {loadMessages} from './actions/api';
import {setCurrentUser, setMessages, setError} from './actions/state';
import {login, verifyToken, loadAccessToken, setAccessToken, getUserData} from './actions/auth';

let loadAccessTokenAction = [
  loadAccessToken, {
    tokenFound: [
      [verifyToken, {
        tokenInvalid: [
          [login, {
            success: [
              setAccessToken,
              [verifyToken, {
                tokenValid: [
                  [getUserData, {
                    success: [setCurrentUser],
                    error: [setError]
                  }]
                ],
                error: [setError]
              }]
            ],
            error: [setError]
          }]
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
      [login, {
        success: [
          setAccessToken,
          [verifyToken]
        ],
        error: [setError]
      }]
    ]
  }
]

controller.signal('rootRouted', loadAccessTokenAction);

controller.signal('viewMessagesClicked',
  [
    loadMessages, {
      success: [setMessages],
      error: [setError]
    }
  ]
);

Router(controller, {
  '/': 'rootRouted'
}).trigger();

ReactDOM.render(
  <Container controller={controller} app={App}/>,
  document.getElementById('app')
);
