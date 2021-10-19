export const state = () => ({
  user: {
    data: null,
  },
})

export const mutations = {
  SET_USER(state, data) {
    state.user.data = data;
  },
}

export const getters = {
  currentUser(state) {
    return state.user.data
  },
}

export const actions = {
  fetchUser({ commit }, { user}) {
    if (user) {
      commit("SET_USER", user)
    }
  },
  userLogout({ commit }) {
    commit("SET_USER", null)
  }
}
