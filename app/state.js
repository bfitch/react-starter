import Model from 'cerebral-baobab';

const currentPracticeUser = Model.monkey({
  cursors: {
    practiceUsers: ['currentUser', 'practice_users']
  },
  get(data) {
    return data.practiceUsers.find((practiceUser) => practiceUser.default);
  }
});

const uid = Model.monkey({
  cursors: {
    currentPracticeUser: ['currentPracticeUser']
  },
  get(data) {
    if (data.currentPracticeUser) {
      return data.currentPracticeUser.uid;
    }
  }
});

export default {
  currentUser: {
    practice_users: []
  },
  currentPracticeUser: currentPracticeUser,
  currentPracticeUserUid: uid,
  isLoading: false,
  error: {}
};
