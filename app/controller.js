import Controller from 'cerebral';
import Model from 'cerebral-baobab';
import state from './state';
import axios from 'axios';
import hellojs from 'hellojs';

const services = {
  ajax: axios,
  hello: hellojs,
  localStorage: window.localStorage
};

export default Controller(Model(state), services);
