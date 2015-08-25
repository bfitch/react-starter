import Controller from 'cerebral-react-immutable-store';
import state from './state';
import axios from 'axios';

let defaultInput = {
  utils: {
    ajax: axios
  }
};

export default Controller(state, defaultInput);
