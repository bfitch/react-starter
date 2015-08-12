import React from "react";
import controller from './controller';
import {loadMessages} from "./actions/api";
import {setMessages, setError} from "./actions/state";
import App from "./components/app";

controller.signal('appMounted',
  [
    loadMessages, {
      success: setMessages,
      error: setError
    }
  ]
);

React.render(controller.injectInto(App), document.getElementById("app"));
