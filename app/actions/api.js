function fetchConversations(input, state, output, {ajax}) {
  const uid = state.get('currentPracticeUserUid');

  ajax.get(`http://postmaster.dev/api/v1/conversations?practice_user_uid=${uid}`)
    .then((response) => {
      output.success({conversations: response.data.conversations});
    })
    .catch((response) => {
      output.error({error: response.data});
    });
}

export {fetchConversations};
