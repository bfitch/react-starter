function setMessages(input, state, output, services) {
  state.set('messages', input.messages);
}

function setError(input, state, output) {
  state.set('error', input);
}

function setCurrentUser(input, state, output) {
  state.set('currentUser', input.userData);
}

function setMessageText(input, state, output) {
  state.set('messageText', input.text);
}

export {setMessages, setError, setCurrentUser, setMessageText};
