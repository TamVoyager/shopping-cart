import axios from 'axios';

const state = {
  users: []
};
const getters = {
  allUsers: (state) => state.users
};
const actions = {
  async fetchUsers({commit}) {
    const response = await axios.get(api_url)
    console.log(3)
    console.log(response)
    commit('setUser', response.data)
  }
};
const mutations = {
  setUser: (state, users) => (state.users = users)
};
export default {
  state,
  getters,
  actions,
  mutations
}
