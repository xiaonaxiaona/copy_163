import { reqSeeNav,  reqSeeData, reqSeeNewData} from '../../api'
import { RECEIVE_SEENAV, RECEIVE_SEEDATA, RECEIVE_SEENEWDATA } from '../mutation_types'

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
  },
  [RECEIVE_SEENEWDATA](state,seeNewData){
    for (let i = 0; i < seeNewData.length; i++) {
      state.seeData.push( seeNewData[i])
    }
  },
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
  },
  async getSeeNewData({commit},page){
    //  console.log(page);
    const result = await reqSeeNewData(page)
    
    if(result.code*1 === 200){
      commit(RECEIVE_SEENEWDATA,result.data.result)  //这个值是一个数组（数组里面是对象），而在页面显示的时候，要存对象
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