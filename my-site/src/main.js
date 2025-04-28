import Vue from 'vue'
import App from './App.vue'
import '@/styles/global.less'
import router from './router'
import { showMessage } from './utils'
import "./mock"
import vLoading from '@/directives/loading'
Vue.prototype.$showMessage = showMessage;

Vue.config.productionTip = false
//自定义指令

Vue.directive('loading',vLoading)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


//测试区

