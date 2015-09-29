function setMessages(input, state, output, services) {
  state.set('messages', input.messages);
}

function setError(input, state, output) {
  state.set('error', input);
}

function setCurrentUser(input, state, output) {
  state.set('currentUser', input.userData);
}

export {setMessages, setError, setCurrentUser};
