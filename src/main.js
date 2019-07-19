import Vue from 'vue'
import App from './App'
import router from './router'

// 在vue项目使用lib-flexible来解决移动端适配了
import 'lib-flexible/flexible'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: h => h(App),
  router      // 配置路由器

})
