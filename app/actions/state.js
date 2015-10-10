function setConversations(input, state, output, services) {
  state.set('conversations', input.conversations);
}

function setError(input, state, output) {
  state.set('error', input.error);
}

function setCurrentUser(input, state, output) {
  state.set('currentUser', input.userData);
}

export {setConversations, setError, setCurrentUser};
