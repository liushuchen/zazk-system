const state = {
  menuIndex: '/home'
}

const mutations = {
  CHANGE_MENU_INDEX: (state, value) => {
    state.menuIndex = value
  }
}

const actions = {
  changeMenuIndex({ commit }, data) {
    commit('CHANGE_MENU_INDEX', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
