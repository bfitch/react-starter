function fetchConversations(input, state, output, {cachejax}) {
  const uid = state.getComputed(['currentPracticeUserUid']);

  cachejax.get('conversations', {practice_user_uid: uid})
    .then((response) => {
      output.success({conversations: response.data.conversations});
    })
    .catch((response) => {
      output.error({error: response.data});
    });
}

export {fetchConversations};
