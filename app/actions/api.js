function fetchConversations(input, state, output, {ajax}) {
  debugger 
  ajax.get(`http://postmaster.dev/api/v1/conversations?practice_user_uid=${uid}`)
    .then((response) => {
      output.success({messages: response.data.messages});
    })
    .catch((response) => {
      output.error(response);
    });
}

export {fetchConversations};
