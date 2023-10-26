import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/vant-ui'
import '@/styles/common.less'
import { Toast } from 'vant'
Vue.config.productionTip = false
Vue.use(Toast)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
