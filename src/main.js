import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import './mock/mockServer'  //mock数据要加上这个
import LoginHeader from './components/LoginHeader/LoginHeader.vue'
import Vuelazyload from 'vue-lazyload'

import loading from './common/img/loading.gif'
Vue.use(Vuelazyload,{ loading })

// 在vue项目使用lib-flexible来解决移动端适配了
import 'lib-flexible/flexible'

Vue.config.productionTip = false

Vue.component('LoginHeader', LoginHeader) //注册全局组件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: h => h(App),
  router,    // 配置路由器
  store
})
