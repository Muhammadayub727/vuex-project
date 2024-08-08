import AuthServise from "@/service/auth";

const state = {
  isLoading: false,
};

const mutations = {
  setLoading(state) {
    state.isLoading = true;
  },
  registerStart(user) {
    state.isLoading = true;
    state.user = null;
    state.errors = null;
  },
  registerSuccess(state, payload) {
    state.isLoading = false;
    state.user = payload;
  },
  registerFailure(state, payload) {
    state.isLoading = false;
    state.errors = payload;
  },
};

const actions = {
  register(context, user) {
    return new Promise(() => {
      context.commit("registerStart");
      AuthServise.register(user)
        .then((response) => {
          console.log(response.data.user);
          context.commit("registerSuccess");
        })
        .catch((error) => {
          console.log(error.response.data);
          context.commit("registerFailure");
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
