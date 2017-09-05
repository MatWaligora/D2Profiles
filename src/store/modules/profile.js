const state = {
    userProfile: {}
};

const getters = {
    getUserProfile: state => {
        return state.userProfile;
    }
};

const mutations = {
    updateUserProfile(state, payload) {
        state.userProfile = payload;
    }
};

const actions = {};

export default {
    state,
    getters,
    mutations,
    actions
}
