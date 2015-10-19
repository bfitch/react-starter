function setConversations(input, state, output, services) {
  state.set('conversations', input.conversations);
}

function setPracticeUsers(input, state, output, services) {
  state.set('practiceUsers', input.practice_users);
}

function setPatients(input, state, output, services) {
  state.set('patients', input.patients);
}

function setError(input, state, output) {
  state.set('error', input.error);
}

function setCurrentUser(input, state, output) {
  state.set('currentUser', input.currentUser);
}

export {
  setConversations,
  setError,
  setCurrentUser,
  setPatients,
  setPracticeUsers
};
