import Controller from 'cerebral';
import Model from 'cerebral-baobab';
import {state, computed} from './state';
import axios from 'axios';
import OAuth from '../vendor/oauth';
import Cachejax from 'cachejax';

let model = Model(state);

const config = {
  currentUser: {
    mapping: 'http://snowflake.dev/api/v1/me.json',
    root: false
  },
  conversations: {
    mapping: 'http://postmaster.dev/api/v1/conversations'
  },
  patients: {
    mapping: 'http://icisstaff.dev/api/patients/v3/patients/:guid',
    root: 'patient',
    batch: true
  },
  practiceUsers: {
    mapping: 'http://postmaster.dev/api/v1/practice_users/:uid',
    root: 'practice_user',
    batch: true
  }
}

const services = {
  ajax:         axios,
  oauthd:       window.OAuth,
  localStorage: window.localStorage,
  cachejax:     Cachejax(model.tree, config)
};

export default Controller(model, services, computed);
