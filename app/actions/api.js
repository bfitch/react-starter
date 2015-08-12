function loadMessages(input, state, output) {
  input.utils.ajax.get('http://localhost:8081/api/messages')
    .then((response) => {
      output.success({messages: response.data.messages});
    })
    .catch((response) => {
      output.error({error: response});
    });
}

export {loadMessages};