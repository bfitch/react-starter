import Controller from 'cerebral';
import Model from 'cerebral-immutable-store';
import state from './state';
import axios from 'axios';

const services = {
  ajax: axios
};

export default Controller(Model(state), services);
