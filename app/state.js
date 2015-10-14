import Model from 'cerebral-baobab';

const computed = {
  currentPracticeUser: function(get) {
    return get(['currentUser', 'practice_users']).find((practiceUser) => practiceUser.default);
  },

  currentPracticeUserUid: function(get, getComputed) {
    return getComputed(['currentPracticeUser']).uid;
  },

  isNewConversation: function(get, getComputed) {
    debugger
    return get(['conversations', 'read_by_uids']).every((uid) => {
      uid !== getComputed(['currentPracticeUserUid']);
    });
  }
};

let state = {
  conversations: [],
  isLoading: false,
  error: {}
};

export {state, computed};
