import { reqCategoryData } from '../../api'
import { RECEIVE_CATEGORYDATA } from '../mutation_types'

const state ={
  categoryData : {}
}

const mutations = {
  [RECEIVE_CATEGORYDATA](state, categoryData){
    state.categoryData = categoryData
  }
}

const actions = {
  async getCategoryData({commit}){
    const result = await reqCategoryData()

    if(result.code===0){
      commit(RECEIVE_CATEGORYDATA,result.data)
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