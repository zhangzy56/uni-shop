export default {
  namespaced: true,
  state: {
    token: null,
    userInfo: null
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    login({ commit }, loginForm) {},
    logout({ commit }) {},
    async updateUserInfo({ commit }) {}
  }
}
