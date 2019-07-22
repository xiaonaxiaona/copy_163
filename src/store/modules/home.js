import { reqHomeData } from '../../api'
import { RECEIVE_HOMEDATA } from '../mutation_types'

const state = {
  homeData: {}
}

const mutations = {
  [RECEIVE_HOMEDATA](state,homeData){
    state.homeData = homeData
  }
}

const actions = {
  async getHomeDate({commit}){
    const result = await reqHomeData()
    if(result.code===0){
      commit(RECEIVE_HOMEDATA,result.data)
    }
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}