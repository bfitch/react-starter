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

function fetchPracticeUsers(input, state, output, {cachejax}) {
  const uids = state.getComputed(['practiceUserUids']);

  cachejax.batch(uids, (uid) => cachejax.get('practiceUsers', {uid: uid}))
    .then((practiceUsers) => {
      output.success({practice_users: practiceUsers});
    })
    .catch((response) => {
      output.error({error: response.data});
    });
}

function fetchPatients(input, state, output, {cachejax}) {
  const guids = state.getComputed(['patientGuids']);
  
  cachejax.batch(guids, (guid) => cachejax.get('patients', {guid: guid}))
    .then((patients) => {
      output.success({patients: patients});
    })
    .catch((response) => {
      output.error({error: response.data});
    });
}

export {fetchConversations, fetchPracticeUsers, fetchPatients};
