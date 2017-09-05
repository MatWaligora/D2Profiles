import { secrets } from '../../secrets';

const state = {
  account: {},
  destinyMemberships: [],
  loggedIn: false,
  client_id: secrets.client_id,
  client_secret: secrets.client_secret,
  apiKey: secrets.apiKey
};

const getters = {
  getAccount: state => {
    return state.account;
  },
  getLoggedIn: state => {
    return state.loggedIn;
  },
  getDestinyMemberships: state => {
    return state.destinyMemberships;
  },
  getTokenEndpoint: state => {
    return state.tokenEndpoint;
  },
  client_id: state => {
    return state.client_id;
  },
  getClientSecret: state => {
    return state.client_secret;
  },
  getApiKey: state => {
    return state.apiKey;
  },
};

const mutations = {
  updateAccount (state, payload) {
    state.account = payload;
  },
  updateDestinyMemberships (state, payload) {
    state.destinyMemberships = payload;
  },
  updateLoggedIn (state, payload) {
    state.loggedIn = payload;
  },

};

const actions = {

};

export default {
  state,
  getters,
  mutations,
  actions
}
