import Vue from 'vue'
import App from './App.vue'
import '@/styles/global.less'
import router from './router'
import { showMessage } from './utils'

Vue.prototype.$showMessage = showMessage;
showMessage({
  type: 'info',
  duration: 2000,
  
  text:'nihao'
})
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
