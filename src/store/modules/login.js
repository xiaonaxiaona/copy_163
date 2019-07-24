import { reqUserInfo, reqLogout} from '../../api'
import { LOGOUT, RECEIVE_USER } from '../mutation_types'

const state ={
  userInfo : ''
}

const mutations = {
  [RECEIVE_USER](state, user){
    state.userInfo = user
  },
  [LOGOUT](state){
    state.userInfo = ''
  }
}

const actions = {
  async getUserInfo ({commit}){
    const result = await reqUserInfo()

    if(result.code===0){
      commit(RECEIVE_USER,result.data.name || result.data.name )
    }
  },
  async logout ({commit},callback) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(LOGOUT)
      callback()
    }
  }
}

const getters = {
  
}

export default{
  state,
  mutations,
  actions,
  getters
}