import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './modules/auth';
import View from './modules/view';
import Profile from './modules/profile';
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    Auth,
    View,
    Profile
  }
});
