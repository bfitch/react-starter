import Model from 'cerebral-baobab';

const computed = {
  currentPracticeUser: function(get) {
    return get(['currentUser', 'practice_users']).find((practiceUser) => practiceUser.default);
  },

  currentPracticeUserUid: function(get, getComputed) {
    return getComputed(['currentPracticeUser']).uid;
  },

  isNew: function(get, getComputed) {
    return (conversation) => {
      return conversation.read_by_uids.every((uid) => {
        uid !== getComputed(['currentPracticeUserUid']);
      });
    };
  },

  decoratedConversations: function(get, getComputed) {
    return get(['conversations']).map((conversation) => {
      let clone   = Object.assign({}, conversation);
      clone.isNew = computed.isNew(get, getComputed)(conversation);
      return clone;
    });
  }
};

let state = {
  conversations: [],
  isLoading: false,
  error: {}
};

export {state, computed};
