const state = {
  loader: false
};

const getters = {
  getLoader: state => {
    return state.loader;
  }
};

const mutations = {
  updateLoader(state, payload) {
    state.loader = payload;
  }
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions
}
