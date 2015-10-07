import Controller from 'cerebral';
import Model from 'cerebral-baobab';
import state from './state';
import axios from 'axios';
import OAuth from '../vendor/oauth';

const services = {
  ajax: axios,
  oauthd: window.OAuth,
  localStorage: window.localStorage
};

export default Controller(Model(state), services);
