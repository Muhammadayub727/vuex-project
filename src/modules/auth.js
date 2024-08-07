const state = {
    isLoading: false
};

const mutations = {
    setLoading(state, payload) {
        state.isLoading = payload;
    }
};

const actions = {
    register(context, payload) {
        setTimeout(() => {
            context.commit("setLoading", false); 
        },2000);
    }
};

export default {
    state,
    mutations,
    actions
};
