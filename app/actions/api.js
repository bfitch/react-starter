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
  let promises = uids.map(uid => cachejax.get('practiceUsers', {uid: uid}));

  cachejax.all(promises).then((responses) => {
    let practiceUsers = responses.map(res => res.data.practice_user);
    output.success({practice_users: practiceUsers});
  })
  .catch((response) => {
    output.error({error: response.data});
  });
}

// function fetchPatients(input, state, output, {cachejax}) {
//   const guids = state.getComputed(['patientGuids']);
//   let promises = guids.map(guid => cachejax.get('patients', {guid: guid}));
//
//   cachejax.all(promises).then((responses) => {
//     let patients = responses.map(res => res.data.patient);
//     output.success({patients: patients});
//   })
//   .catch((response) => {
//     output.error({error: response.data});
//   });
// }

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
