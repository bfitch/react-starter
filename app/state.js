import Model from 'cerebral-baobab';

const computed = {
  currentPracticeUser: function(get) {
    return get(['currentUser', 'practice_users']).find((practiceUser) => practiceUser.default);
  },

  currentPracticeUserUid: function(get, getComputed) {
    return getComputed(['currentPracticeUser']).uid;
  },

  readStatusConversations: function(get, getComputed) {
    return get(['conversations']).map((conversation) => {
      let practiceUserUid = getComputed(['currentPracticeUserUid']);

      return {
        ...conversation,
        isNew: conversation.read_by_uids.every((uid) => uid !== practiceUserUid)
      }
    });
  },

  practiceUserUids: function(get, getComputed) {
    const uids = get(['conversations'])
      .map((conversation) => conversation.practice_user_uids)
      .reduce((accumulator, uids) => accumulator.concat(uids), []);

    return [...new Set(uids)];
  },

  patientGuids: function(get, getComputed) {
    const guids = get(['conversations']).map(conversation => conversation.patient_guid);
    return [...new Set(guids)];
  }
};

let state = {
  conversations: [],
  isLoading: false,
  error: {}
};

export {state, computed};
