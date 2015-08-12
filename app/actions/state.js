function setMessages(input, state, output) {
  state.set('messages', input.messages);
}

function setError(input, state, output) {
  state.set('error', 'error');
}

export {setMessages, setError};
