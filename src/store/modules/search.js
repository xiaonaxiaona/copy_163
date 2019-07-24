import {RECEIVE_SEARCHINITIAL} from '../mutation_types'
import {reqSearchInitialData} from '../../api'

const state = {
  searchInitialData: {}
}
const mutations = {
  [RECEIVE_SEARCHINITIAL] (state,data) {
    state.searchInitialData = data
  }
}
const actions = {
  async getSearchInitialData ({commit}) {
    const result = await reqSearchInitialData()
    if (result.code*1 === 200) {
      commit(RECEIVE_SEARCHINITIAL,result.data)
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
