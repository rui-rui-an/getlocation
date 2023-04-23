const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    console.log(111)
  }
}

const actions = {
  generateRoutes ({ commit }, roles) {
    console.log(222)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
