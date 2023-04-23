const state = {
  token: '',
  name: '张三',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
    console.log(name)
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user login
  login ({ commit }, userInfo) {
    console.log(111)
  },

  // get user info
  getInfo ({ commit, state }) {
    console.log(222)
  },

  // user logout
  logout ({ commit, state, dispatch }) {
    console.log(3333)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
