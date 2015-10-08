import Model from 'cerebral-baobab';

const currentPracticeUser = Model.monkey({
  cursors: {
    practiceUsers: ['currentUser', 'practice_users']
  },
  get(data) {
    return data.practiceUsers.find((practiceUser) => practiceUser.default);
  }
});

export default {
  currentUser: {},
  currentPracticeUser: currentPracticeUser,
  isLoading: false,
  error: {}
};
