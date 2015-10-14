import Controller from 'cerebral';
import Model from 'cerebral-baobab';
import {state,computed} from './state';
import axios from 'axios';
import OAuth from '../vendor/oauth';
import Cachejax from './cachejax';

let model = Model(state);

const config = {
  endpointMapping: {
    'currentUser': 'http://snowflake.dev/api/v1/me.json',
    'conversations': 'http://postmaster.dev/api/v1/conversations'
  }
}

const services = {
  ajax:         axios,
  oauthd:       window.OAuth,
  localStorage: window.localStorage,
  cachejax:     Cachejax(model.tree, config)
};

export default Controller(model, services, computed);
