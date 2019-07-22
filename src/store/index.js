import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home.js'
import category from './modules/category.js'
import search from './modules/search.js'
import see from './modules/see.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    home,
    category,
    search,
    see
  }
})