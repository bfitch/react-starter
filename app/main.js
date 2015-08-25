import React from 'react';
import controller from './controller';
import {loadMessages} from './actions/api';
import {setMessages, setError} from './actions/state';
import App from './components/app';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Router from 'reactive-router';

injectTapEventPlugin();

controller.signal('rootRouted',
  (input, state, output) => {
      state.set('path', input.pathname);
  },
  [
    loadMessages, {
      success: [setMessages],
      error: [setError]
    }
  ]
);

// controller.signal('homeRouted', (input, state, output) => {
//   console.log('homeRouted signal');
//   state.set('path', input.path);
// });
//
// controller.signal('fooRouted', (input, state, output) => {
//   console.log('fooRouted signal');
//   state.set('path', input.path);
// });

const router = Router({
  '/': controller.signals.rootRouted,
  '/home': controller.signals.homeRouted,
  '/foo': controller.signals.fooRouted
});

router.listen();

React.render(controller.injectInto(App), document.getElementById('app'));
