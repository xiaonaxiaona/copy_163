import { reqSeeNav,  reqSeeData} from '../../api'
import { RECEIVE_SEENAV, RECEIVE_SEEDATA } from '../mutation_types'

const state = {
  seeNav: [],
  seeData:[]
}

const mutations = {
  [RECEIVE_SEENAV](state,seeNav){
    state.seeNav = seeNav
  },
  [RECEIVE_SEEDATA](state,seeData){
    state.seeData = seeData
  }
}

const actions = {
  async getSeeNav({commit}){
    const result = await reqSeeNav()

    if(result.code*1 === 200){
      commit(RECEIVE_SEENAV,result.data)
    }
  },
  async getSeeData({commit}){
    const result = await reqSeeData()
    if(result.code*1 === 200){
      commit(RECEIVE_SEEDATA,result.data)
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