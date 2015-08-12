import Controller from "cerebral-react-immutable-store";
import axios from "axios";


let state = {
  messages: [],
  isLoading: false,
  error: {}
};

let defaultInput = {
  utils: {
    ajax: axios
  }
};

export default Controller(state, defaultInput);
