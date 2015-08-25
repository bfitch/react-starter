import React from 'react';
import {Container} from 'cerebral-react';
import controller from './controller';
import {loadMessages} from './actions/api';
import {setMessages, setError} from './actions/state';
import App from './components/app';
import Router from 'reactive-router';

controller.signal('rootRouted',
  [
    loadMessages, {
      success: [setMessages],
      error: [setError]
    }
  ]
);

const router = Router({
  '/': controller.signals.rootRouted
});

router.listen();

React.render(
  <Container controller={controller} app={App}/>,
  document.getElementById('app')
);
