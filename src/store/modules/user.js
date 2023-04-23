const state = {
  token: '',
  username: '张三',
  avatar: '',
  desc: ''
}
const mutations = {
  setName (state, data) {
    state.username = data
    console.log(data)
  },
  saveUserInfo (state, data) {
    state.token = data.token
    state.username = data.username
    state.avatar = data.avatar
    state.desc = data.desc
  },
  removeUserInfo (state) {
    state.token = ''
    state.username = ''
    state.avatar = ''
    state.desc = ''
  }
}
const actions = {
  FedLogOut () {
    // 这里处理退出的操作，
    // 比如清除token,清除用户信息,回到登陆页
    console.log('退出')
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
