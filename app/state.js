import Baobab from "baobab";

export default new Baobab({
  messages: {
    data: [],
    isLoading: false,
    validationErrors: {},
    responseErrors: []
  }
},
{
  syncwrite: true,
  asynchronous: false,
  immutable: true
});

